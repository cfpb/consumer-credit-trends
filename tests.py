#!/usr/bin/env python
"""
Tests for process_incoming_data.py for Consumer Credit Trends

More information available in
www.github.com/cfpb/consumer-credit-trends
"""

## Python library imports
import unittest
import process_incoming_data as pid

__author__ = "Consumer Financial Protection Bureau"
__credits__ = ["Hillary Jeffrey"]
__license__ = "CC0-1.0"
__version__ = "0.1"
__maintainer__ = "CFPB"
__email__ = "tech@cfpb.gov"
__status__ = "Development"

class ProcessingTestCase(unittest.TestCase):

    def setUp(self, inputdir=pid.DEFAULT_INPUT_FOLDER, outputdir=pid.DEFAULT_OUTPUT_FOLDER):
        self.inputdir, self.outputdir = pid.load_paths(inputdir, outputdir)

    def tearDown(self):
        pass

    def test_epochtime(self):
        pass

    def test_actual_date(self):
        self.assertEqual(pid.actual_date(0), "2000-01")
        self.assertEqual(pid.actual_date(60), "2005-01")
        self.assertEqual(pid.actual_date(203), "2016-12")

    def test_human_numbers_whole_thousands(self):
        self.assertEqual(pid.human_numbers(123456.789, whole_units_only=1), "123,457")

    def test_human_numbers_thousands(self):
        self.assertEqual(pid.human_numbers(123456.789, decimal_places=1, whole_units_only=0), "123,456.8")

    def test_human_numbers_millions(self):
        self.assertEqual(pid.human_numbers(123456789), "123.5 million")

    def test_human_numbers_billions(self):
        self.assertEqual(pid.human_numbers(123456789000), "123.5 billion")

    def test_human_numbers_really_large(self):
        self.assertEqual(pid.human_numbers(123456789000000000000), "123.5 quintillion")
        self.assertEqual(pid.human_numbers(123456789000000000000000), "123,456.8 quintillion")

    def test_process_map(self):
        pass

    def test_process_file_summary(self):
        pass

    def test_process_group_file(self):
        pass

    def test_process_group_yoy_groups(self):
        pass

    def test_process_yoy_summary(self):
        pass

    def test_json_for_bar_chart(self):
        pass

    def test_json_for_group_bar_chart(self):
        pass

    def test_json_for_line_chart(self):
        pass

    def test_json_for_group_line_chart(self):
        pass

    def test_json_for_tile_maps(self):
        pass

    def test_process_snapshot_inputdata(self):
        pass

    # def test_(self):
    #     pass

if __name__ == '__main__':
    unittest.main()
