#!/usr/bin/env python
"""
Processes incoming data from the Office of Research and munges it into
the output formats expected by the CFPB chart display organisms.

Output formats are documented at 
www.github.com/cfpb/consumer-credit-trends
"""

## Python library imports
import os
import csv
import datetime
from pprint import pformat
# import logging


__author__ = "Hillary Jeffrey"
__copyright__ = "Copyright 2017"
__credits__ = ["Hillary Jeffrey"]
__license__ = "GPL"
__version__ = "0.1"
__maintainer__ = "CFPB"
__email__ = "hillary.jeffrey@cfpb.gov"
__status__ = "Development"

## Global variables
# Default save folder if another folder is not specified
DEFAULT_INPUT_FOLDER = "~/Github/consumer-credit-trends-data/data"
DEFAULT_OUTPUT_FOLDER = "~/Github/consumer-credit-trends-data/processed_data/"

# Input/output schemas
MAP_OUTPUT_SCHEMA = ["fips_code", "state_abbr", "value"]
SUMMARY_NUM_OUTPUT_SCHEMA = ["month","date","num","num_unadj"]
SUMMARY_VOL_OUTPUT_SCHEMA = ["month","date","vol","vol_unadj"]
YOY_SUMMARY_OUTPUT_SCHEMA = ["month","date","yoy_num","yoy_vol"]
GROUP_VOL_OUTPUT_SCHEMA = ["month","date","volume","volume_unadj","{}_group"]

# Output: "month","date","yoy_<type>","yoy_<type>",...,"yoy_<type>"
GROUP_YOY_OUTPUT_SCHEMA = ["month","date"]

# Groups
AGE = "age"
INCOME = "income"
SCORE = "score"


MARKET_NAMES = {"AUT": "auto-loan",     # Auto loans
                "CRC": "credit-card",   # Credit cards
                "HCE": "hece",          # Home Equity, Closed End
                "HLC": "heloc",         # Home Equity Line of Credit (HELOC)
                "MTG": "mortgage",      # Mortgages
                "PER": "personal-loan", # Personal loans
                "RET": "retail-loan",   # Retail loans
                "STU": "student-loan",  # Student loans
                }

GROUP_NAMES = {"age": "age",        # Age groups
               "income": "income",  # Income levels
               "score": "score",    # Credit score levels
               "all": "all",        # Summary data
               }

# State FIPS codes
FIPS_CODES = {1:  "AL",
              2:  "AK",
              4:  "AZ",
              5:  "AR",
              6:  "CA",
              8:  "CO",
              9:  "CT",
              10: "DE",
              11: "DC",
              12: "FL",
              13: "GA",
              15: "HI",
              16: "ID",
              17: "IL",
              18: "IN",
              19: "IA",
              20: "KS",
              21: "KY",
              22: "LA",
              23: "ME",
              24: "MD",
              25: "MA",
              26: "MI",
              27: "MN",
              28: "MS",
              29: "MO",
              30: "MT",
              31: "NE",
              32: "NV",
              33: "NH",
              34: "NJ",
              35: "NM",
              36: "NY",
              37: "NC",
              38: "ND",
              39: "OH",
              40: "OK",
              41: "OR",
              42: "PA",
              44: "RI",
              45: "SC",
              46: "SD",
              47: "TN",
              48: "TX",
              49: "UT",
              50: "VT",
              51: "VA",
              53: "WA",
              54: "WV",
              55: "WI",
              56: "WY",
              }

## Methods

def save_csv(filename, content, writemode='wb'):
    """Saves the specified content object into a csv file."""
    if not os.path.exists(os.path.dirname(filename)):
        os.makedirs(os.path.dirname(filename))
        print("Created directories for {}".format(os.path.dirname(filename)))

    with open(filename, writemode) as csvfile:
        writer = csv.writer(csvfile, delimiter=',')
        writer.writerows(content)

    return True


def load_csv(filename, skipheaderrow=True):
    """Loads CSV data from a file"""
    with open(filename, 'rb') as csvfile:
        reader = csv.reader(csvfile)
        # TODO: Handle header row, consider creating list of dictionaries with DictReader
        data = list(reader)

    if skipheaderrow:
        return data[1:]
    else:
        return data


def load_paths(inputpath=DEFAULT_INPUT_FOLDER, outputpath=DEFAULT_OUTPUT_FOLDER):
    """Loads the root path and destination paths and performs path checking"""
    inpath = expand_path(inputpath)
    outpath = expand_path(outputpath)
    # TODO: Make sure paths exist

    # TODO: Do we want the path made or throw an error if it doesn't exist?
    # try:
    #     os.makedirs(destpath)
    # except:
    #     # Exception occurs when attempting to makedirs that exist
    #     # Ignore this exception
    #     # TODO: Parse for specific exception type so we don't ignore
    #     # unexpected exceptions
    #     pass

    return inpath, outpath


def expand_path(path):
    rootpath = os.path.abspath(os.path.expanduser(path))

    return rootpath


def get_csv_list(path):
    """Loads a list of files in the specified directory"""
    files = [f for f in os.listdir(path)
             if f.lower().endswith('.csv') 
             and os.path.isfile(os.path.join(path, f))]

    return files


## Program flow

def process_data_files(inputpath, outputpath, report_success=True, report_failure=True):
    """Processes raw data from the Office of Research"""
    # Get a list of files in the raw data directory
    inputfiles = get_csv_list(inputpath)
    successes = []
    failures  = []

    # For each file, open and munge data
    for filename in inputfiles:
        # Check for market in filename
        market = find_market(filename)
        if market is None:
            print("Found file '{}' does not specify market".format(filename))
            failures.append(filename)
            continue

        # Run file per file-type
        filepath = os.path.join(inputpath, filename)
        cond, data = FILE_PREFIXES[filename[:-8].lower()](filepath)

        if cond:
            # Determine output directory
            outpath = os.path.join(outputpath, market, filename)
            if len(data) > 0:
                cond = save_csv(outpath, data)
            
            if cond:
                successes.append(filename)
            else:
                failures.append(filename)
                continue
            # print("Successfully processed {}".format(filename))
        else:
            failures.append(filename)
            continue

    # Processing complete - perform reporting
    if len(successes) > 0 and report_success:
        print("** Successfully processed files:\n{}\n".format("\n".join(successes)))

    if len(failures) > 0 and report_failure:
        print("** Failed to process files:\n{}\n".format("\n".join(failures)))

    return len(successes), len(inputfiles)


## Process state-by-state map files

def process_map(filename, output_schema=MAP_OUTPUT_SCHEMA):
    """Processes specified map file and outputs data per the schema"""
    # Input  columns: "state","value"
    # Output columns: "fips_code","state_abbr","value"
    # print("Processing map file '{}'".format(filename))

    # Load specified file as input data
    inputdata = load_csv(filename)

    # Initialize output data with column headers
    data = [output_schema]

    # Process data
    for row in inputdata:
        data.append([row[0], FIPS_CODES[int(row[0])], row[1]])

    # Check if any data exists besides column headers
    if len(data) > 1:
        return True, data
    else:
        return True, []


## Process summary files with loan numbers or volumes

def process_num_summary(filename):
    """Helper function that calls process_file_summary with correct output schema"""
    # Output columns: "month","date","num","num_unadj"
    return process_file_summary(filename, SUMMARY_NUM_OUTPUT_SCHEMA)


def process_vol_summary(filename):
    """Helper function that calls process_file_summary with correct output schema"""
    # Output columns: "month","date","vol","vol_unadj"
    return process_file_summary(filename, SUMMARY_VOL_OUTPUT_SCHEMA)


def process_file_summary(filename, output_schema):
    """Processes specified summary file and outputs data per the schema"""
    # print("Processing summary file '{}'".format(filename))

    # Load specified file as input data
    inputdata = load_csv(filename)

    # Initialize output data with column headers
    data = []
    proc = {}

    # Process data
    for row in inputdata:
        monthstr, value, is_adj_str = row
        monthnum = int(monthstr)
        if not proc.has_key(monthnum):
            proc[monthnum] = {"adj": None, "unadj": None}

        if "unadjust" in is_adj_str.lower():
            proc[monthnum]["unadj"] = value
        elif "seasonal" in is_adj_str.lower():
            proc[monthnum]["adj"] = value
        else:
            raise TypeError("Data row (below) does not specify seasonal " +
                            "adjustment in {}\n{}".format(
                            filename, ",".join(row)))

    # Turn dictionaries into a data list for output
    # This order MUST match the provided schema order
    for monthnum, value in proc.items():
        data.append([monthnum,
                     actual_date(monthnum),
                     value["adj"],
                     value["unadj"]])

    # Prep for output by sorting (by month number) and inserting a header
    data.sort()
    data.insert(0, output_schema)

    # Check if any data exists besides column headers
    if len(data) > 1:
        return True, data
    else:
        return True, []


## Process volume files with groups (borrower age, income level, credit score)

def process_group_age_vol(filename):
    """Helper function that calls process_group_file with correct
    group and output schema"""
    # Output columns: "month","date","vol","vol_unadj"
    return process_group_file(filename, AGE, GROUP_VOL_OUTPUT_SCHEMA)


def process_group_income_vol(filename):
    """Helper function that calls process_group_file with correct
    group and output schema"""
    # Output columns: "month","date","vol","vol_unadj"
    return process_group_file(filename, INCOME, GROUP_VOL_OUTPUT_SCHEMA)


def process_group_score_vol(filename):
    """Helper function that calls process_group_file with correct
    group and output schema"""
    # Output columns: "month","date","vol","vol_unadj"
    return process_group_file(filename, SCORE, GROUP_VOL_OUTPUT_SCHEMA)


def process_group_file(filename, group_type, output_schema):
    # Output columns: "month","date","volume","volume_unadj","<type>_group"
    # print("Processing file with groups '{}'".format(filename))

    return False, []


## Process year-over-year files with groups (borrower age, income level, credit score)
# process_group_age_yoy,
# process_group_income_yoy,
# process_group_score_yoy,

def process_group_age_yoy(filename):
    """Helper function that calls process_group_yoy_groups with correct
    group and output schema"""
    return process_group_yoy_groups(filename, AGE, GROUP_YOY_OUTPUT_SCHEMA)


def process_group_income_yoy(filename):
    """Helper function that calls process_group_yoy_groups with correct
    group and output schema"""
    return process_group_yoy_groups(filename, INCOME, GROUP_YOY_OUTPUT_SCHEMA)


def process_group_score_yoy(filename):
    """Helper function that calls process_group_yoy_groups with correct
    group and output schema"""
    return process_group_yoy_groups(filename, SCORE, GROUP_YOY_OUTPUT_SCHEMA)


def process_group_yoy_groups(filename, group_type, output_schema):
    # Output columns: "month","date","yoy_<type>","yoy_<type>",...,"yoy_<type>"
    # print("Processing year-over-year file '{}'".format(filename))

    return False, []


## Process summary year-over-year files

def process_yoy_summary(filename, output_schema=YOY_SUMMARY_OUTPUT_SCHEMA):
    """Processes specified summary file and outputs data per the schema"""
    # Output columns: "month","date","yoy_num","yoy_vol"
    # print("Processing summary file '{}'".format(filename))

    # Load specified file as input data
    inputdata = load_csv(filename)

    # Initialize output data with column headers
    data = []
    proc = {}

    # Process data
    for row in inputdata:
        monthstr, value, type_str = row
        monthnum = int(monthstr)
        if not proc.has_key(monthnum):
            proc[monthnum] = {"num": None, "vol": None}

        # Input column "group" is "Dollar Volume" or "Number of Loans"
        if "number" in type_str.lower():
            proc[monthnum]["num"] = value
        elif "volume" in type_str.lower():
            proc[monthnum]["vol"] = value
        else:
            raise TypeError("YOY Summary Data row (below) improperly " +
                            "formatted in {}\n{}".format(filename, row))

    # Turn dictionaries into a data list for output
    # This order MUST match the provided schema order
    for monthnum, value in proc.items():
        data.append([monthnum,
                     actual_date(monthnum),
                     value["num"],
                     value["vol"]])

    # Prep for output by sorting (by month number) and inserting a header
    data.sort()
    data.insert(0, output_schema)

    # Check if any data exists besides column headers
    if len(data) > 1:
        return True, data
    else:
        return True, []


## Helper functions

def find_market(input, possible_names=MARKET_NAMES):
    """Uses the input string and a specified dictionary of market names to
    determine which credit market the input string describes."""
    for abbr, name in possible_names.items():
        if abbr in input:
            return name

    return None


def actual_date(month):
    """
    Takes a month number and computes an actual date from it.
    January 2000 = month zero
    """
    addl_years = int(month/12)
    addl_months = (month % 12) + 1  # offset for January as month input is 1-12

    try:
        date = datetime.date(2000+addl_years, addl_months, 1)
    except Exception, e:
        print("{} = {}*12 + {}".format(month, addl_years, addl_months))
        raise e

    return date.strftime("%Y-%m")


###########################################################
# General program flow
###########################################################
# 0. Set up paths and parse args
# 1. Get list of data files in input directory
# 2. Open each file and munge the data as specified by type
# 3. Save each file into the appropriate output directory
# 
###########################################################

# Filenames are formatted as:
# "<prefix>_<market>.csv" 
# NOTE: This global set must come after the methods are defined
FILE_PREFIXES = {"map_data":                process_map,
                 "num_data":                process_num_summary,
                 "vol_data":                process_vol_summary,
                 "volume_data_age_group":   process_group_age_vol,
                 "volume_data_income_level":process_group_income_vol,
                 "volume_data_score_level": process_group_score_vol,
                 "yoy_data_all":            process_yoy_summary,
                 "yoy_data_age_group":      process_group_age_yoy,
                 "yoy_data_income_level":   process_group_income_yoy,
                 "yoy_data_score_level":    process_group_score_yoy,
                 }


if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser(description='Processes data files from the Office of Research.')
    parser.add_argument('-i', '--input-path', metavar="INPUTDIR", type=str,
                        dest='inputdir', default=DEFAULT_INPUT_FOLDER,
                        help='Specifies path for folder containing input data files (default: "")')
    parser.add_argument('-o', '--output-path', metavar="OUTPUTDIR", type=str,
                        dest='outputdir', default=DEFAULT_OUTPUT_FOLDER,
                        help='Specifies path for root folder to put processed data files (default: "")')
    # parser.add_argument('-j', '--suppress-json')

    args = parser.parse_args()

    # Parse the given paths
    inputdir, outputdir = load_paths(args.inputdir, args.outputdir)

    # Process the data
    successes, numfiles = process_data_files(inputdir, outputdir)
    print("** Processed {} of {} input data files successfully".format(successes, numfiles))
