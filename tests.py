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

    # def setUp(self, inputdir=pid.DEFAULT_INPUT_FOLDER, outputdir=pid.DEFAULT_OUTPUT_FOLDER):
    #     self.inputdir, self.outputdir = pid.load_paths(inputdir, outputdir)

    # def tearDown(self):
    #     pass

    ## Test helper and formatting functions
    def test_epochtime_seconds(self):
        """Checks epochtime conversion with default YYYY-MM schema to mseconds"""
        self.assertEqual(pid.epochtime("2000-01"), 946684800)

    # JSON uses milliseconds, not seconds - test this conversion
    def test_epochtime_milliseconds(self):
        """Checks epochtime conversion with default YYYY-MM schema to milliseconds"""
        self.assertEqual(pid.epochtime("2016-11") * pid.SEC_TO_MS, 1477958400000)

    def test_actual_date(self):
        """Checks actual conversion from Office of Research labeling with default schema"""
        self.assertEqual(pid.actual_date(0), "2000-01")
        self.assertEqual(pid.actual_date(60), "2005-01")
        self.assertEqual(pid.actual_date(203), "2016-12")

    def test_human_numbers_whole_thousands(self):
        """Checks human number conversion for thousands with whole units only"""
        self.assertEqual(pid.human_numbers(123456.789, whole_units_only=1), "123,457")

    def test_human_numbers_thousands(self):
        """Checks human number conversion for thousands with a decimal place"""
        self.assertEqual(pid.human_numbers(123456.789, decimal_places=1, whole_units_only=0), "123,456.8")

    def test_human_numbers_millions(self):
        """Checks human number conversion for millions"""
        self.assertEqual(pid.human_numbers(123456789), "123.5 million")

    def test_human_numbers_billions(self):
        """Checks human number conversion for billions"""
        self.assertEqual(pid.human_numbers(123456789000), "123.5 billion")

    def test_human_numbers_really_large(self):
        """Checks human number conversion for numbers in excess of quintillions"""
        self.assertEqual(pid.human_numbers(123456789000000000000), "123.5 quintillion")
        self.assertEqual(pid.human_numbers(123456789000000000000000), "123,456.8 quintillion")

    ## Test data-processing functions
    # def test_process_map(self):

    # def test_process_file_summary(self):

    # def test_process_group_file(self):

    # def test_process_group_yoy_groups(self):

    # def test_process_yoy_summary(self):

    ## Test JSON-formatting functions
    def test_json_for_bar_chart(self):
        """Checks JSON generation for bar chart"""
        data = [[200,"2016-09",-0.00904763076395709,0.0177694122262799],
                [201,"2016-10",-0.0152277765891315,0.0072320674172841],
                [202,"2016-11",0.0169132753519787,0.0335164876305474],
                [203,"2016-12",0.00176733840717325,0.0244693559683495]]
        expected_json = {'volume': [[1472688000000, 0.0177694122262799],
                                    [1475280000000, 0.0072320674172841],
                                    [1477958400000, 0.0335164876305474],
                                    [1480550400000, 0.0244693559683495]],
                         'number': [[1472688000000, -0.00904763076395709],
                                    [1475280000000, -0.0152277765891315],
                                    [1477958400000, 0.0169132753519787],
                                    [1480550400000, 0.00176733840717325]]}

        self.assertEqual(pid.json_for_bar_chart(data), expected_json)

    def test_json_for_group_bar_chart(self):
        """Checks JSON generation for group bar chart (Income YOY vals used)"""
        schema = pid.INCOME_YOY_COLS
        data = [[200,"2016-09",0.0213394824154607,0.00529339711100918,0.0244298073202065,0.0297756721371025],
                [201,"2016-10",0.055576790100007,0.00764338396135145,0.0104790755810054,0.0278947254236608],
                [202,"2016-11",0.0560629350853608,0.0349045626523292,0.045377164152115,0.0485924949426761],
                [203,"2016-12",0.0615022071579083,0.00977536416304692,0.0371331795451422,0.0461055699665207]]
        expected_json = {'high': [[1472688000000, 0.0297756721371025],
                                  [1475280000000, 0.0278947254236608],
                                  [1477958400000, 0.0485924949426761],
                                  [1480550400000, 0.0461055699665207]],
                         'middle': [[1472688000000, 0.0244298073202065],
                                    [1475280000000, 0.0104790755810054],
                                    [1477958400000, 0.045377164152115],
                                    [1480550400000, 0.0371331795451422]],
                         'moderate': [[1472688000000, 0.00529339711100918],
                                      [1475280000000, 0.00764338396135145],
                                      [1477958400000, 0.0349045626523292],
                                      [1480550400000, 0.00977536416304692]],
                         'low': [[1472688000000, 0.0213394824154607],
                                 [1475280000000, 0.055576790100007],
                                 [1477958400000, 0.0560629350853608],
                                 [1480550400000, 0.0615022071579083]]}

        self.assertEqual(pid.json_for_group_bar_chart(data, schema), expected_json)

    def test_json_for_line_chart_empty(self):
        """Checks JSON generation for empty line chart information"""
        data = []
        expected_json = {'adjusted': [],
                         'unadjusted': []}

        self.assertEqual(pid.json_for_line_chart(data), expected_json)

    def test_json_for_line_chart_num(self):
        """Checks JSON generation for number-originated line chart information"""
        data = [[192,"2016-01",2261050.54537965,1958832],
                [193,"2016-02",2267494.31138164,2246188.49521831]]
        expected_json = {'adjusted': [[1451606400000, 2261050.54537965],
                                      [1454284800000, 2267494.31138164]],
                         'unadjusted': [[1451606400000, 1958832],
                                        [1454284800000, 2246188.49521831]]}

        self.assertEqual(pid.json_for_line_chart(data), expected_json)

    def test_json_for_line_chart_vol(self):
        """Checks JSON generation for volume line chart information"""
        data = [[192,"2016-01",48160239833.945,41705902620],
                [193,"2016-02",48466182874.0272,46616700502.7989]]
        expected_json = {'adjusted': [[1451606400000, 48160239833.945],
                                      [1454284800000, 48466182874.0272]],
                         'unadjusted': [[1451606400000, 41705902620],
                                        [1454284800000, 46616700502.7989]]}

        self.assertEqual(pid.json_for_line_chart(data), expected_json)

    def test_json_for_group_line_chart(self):
        """Checks JSON generation for group line chart (age groups used to test)"""
        data = [[201,"2016-10",16506700008.8008,15791302709.9252,"Age 30-44"],
                [201,"2016-10",20135364364.315,19159900917.7389,"Age 45-64"],
                [201,"2016-10",5903150809.33336,5650148500.54519,"Age 65 and older"],
                [201,"2016-10",6989408029.74811,6802823020.4695,"Younger than 30"],
                [202,"2016-11",16627916997.6666,15336120060.6906,"Age 30-44"],
                [202,"2016-11",19962328823.0403,18458996023.1348,"Age 45-64"],
                [202,"2016-11",5924269032.58776,5422745748.72832,"Age 65 and older"],
                [202,"2016-11",6949473984.57697,6499161889.61153,"Younger than 30"]]
        expected_json =  {'Younger than 30': {'adjusted': [[1475280000000, 6989408029.74811],
                                                           [1477958400000, 6949473984.57697]], 
                                              'unadjusted': [[1475280000000, 6802823020.4695],
                                                             [1477958400000, 6499161889.61153]]}, 
                          'Age 65 and older': {'adjusted': [[1475280000000, 5903150809.33336],
                                                            [1477958400000, 5924269032.58776]],
                                               'unadjusted': [[1475280000000, 5650148500.54519], 
                                                              [1477958400000, 5422745748.72832]]}, 
                           'Age 45-64': {'adjusted': [[1475280000000, 20135364364.315],
                                                      [1477958400000, 19962328823.0403]], 
                                         'unadjusted': [[1475280000000, 19159900917.7389], 
                                                        [1477958400000, 18458996023.1348]]}, 
                            'Age 30-44': {'adjusted': [[1475280000000, 16506700008.8008],
                                                       [1477958400000, 16627916997.6666]], 
                                          'unadjusted': [[1475280000000, 15791302709.9252], 
                                                         [1477958400000, 15336120060.6906]]}}

        self.assertEqual(pid.json_for_group_line_chart(data), expected_json)

    def test_json_for_tile_map(self):
        """Checks JSON generation of tile map info (subset)"""
        data = [[1,"AL",-0.0395144471509696],
                [2,"AK",-0.16233521054865],
                [4,"AZ",0.0278955304445625],
                [5,"AR",0.0614590415394063],
                [6,"CA",0.0349549549771158]]
        expected_json = [{'name': 'AL', 'value': '-3.95'},
                         {'name': 'AK', 'value': '-16.23'},
                         {'name': 'AZ', 'value': '2.79'},
                         {'name': 'AR', 'value': '6.15'},
                         {'name': 'CA', 'value': '3.50'}]

        self.assertEqual(pid.json_for_tile_map(data), expected_json)

    # Test Data Snapshot processing function
    def test_process_data_snapshot_empty(self):
        """Checks handling of Data Snapshot for empty input"""
        data = []
        expected_output = {}

        self.assertEqual(pid.process_snapshot_inputdata(data), expected_output)

    def test_process_data_snapshot_initial_mkts(self):
        """Checks the Data Snapshot generation for initial 4-market release"""
        data = [['AUT', '203', '2138188.23537369', '48249042664.7568', '2.44693559683495'],
                ['MTG', '203', '882841.176776627', '237559374287.301', '63.193672042488'],
                ['STU', '203', '474155.067337077', '9496253156.39382', '18.7950554595947'],
                ['CRC', '203', '6064972.5629191', '34764766391.6879', '4.36205283984166']]
        expected_output = {'auto-loan': '<h3><b>2.1&nbsp;million</b><br>Auto loans originated</h3>\n<h3><br><b>$48.2&nbsp;billion</b><br>Dollar volume of new loans</h3>\n<h3><br><b>2.4% increase</b><br>In year-over-year originations</h3>\n',
                           'credit-card': '<h3><b>6.1&nbsp;million</b><br>Credit cards originated</h3>\n<h3><br><b>$34.8&nbsp;billion</b><br>Dollar volume of new cards</h3>\n<h3><br><b>4.4% increase</b><br>In year-over-year originations</h3>\n',
                           'mortgage': '<h3><b>882,841</b><br>Mortgages originated</h3>\n<h3><br><b>$237.6&nbsp;billion</b><br>Dollar volume of new mortgages</h3>\n<h3><br><b>63.2% increase</b><br>In year-over-year originations</h3>\n',
                           'student-loan': '<h3><b>474,155</b><br>Student loans originated</h3>\n<h3><br><b>$9.5&nbsp;billion</b><br>Dollar volume of new loans</h3>\n<h3><br><b>18.8% increase</b><br>In year-over-year originations</h3>\n'}

        self.assertEqual(pid.process_snapshot_inputdata(data), expected_output)

    def test_process_data_snapshot_all_mkts(self):
        """Checks the Data Snapshot for all markets, not just initial 4-market release"""
        data = [['AUT', '203', '2138188.23537369', '48249042664.7568', '2.44693559683495'],
                ['MTG', '203', '882841.176776627', '237559374287.301', '63.193672042488'],
                ['HCE', '203', '62906.4947501572', '1716120265.43418', '23.6809140838135'],
                ['HLC', '203', '111370.490768467', '12041293094.5884', '3.69588511126977'],
                ['PER', '203', '1372618.0197889', '7680777959.05556', '-4.79966806749338'],
                ['RET', '203', '5086575.4847262', '11618949340.6761', '0.683198110377181'],
                ['STU', '203', '474155.067337077', '9496253156.39382', '18.7950554595947'],
                ['CRC', '203', '6064972.5629191', '34764766391.6879', '4.36205283984166']]
        expected_output = {'auto-loan': '<h3><b>2.1&nbsp;million</b><br>Auto loans originated</h3>\n<h3><br><b>$48.2&nbsp;billion</b><br>Dollar volume of new loans</h3>\n<h3><br><b>2.4% increase</b><br>In year-over-year originations</h3>\n',
                           'credit-card': '<h3><b>6.1&nbsp;million</b><br>Credit cards originated</h3>\n<h3><br><b>$34.8&nbsp;billion</b><br>Dollar volume of new cards</h3>\n<h3><br><b>4.4% increase</b><br>In year-over-year originations</h3>\n',
                           'hece': '<h3><b>62,906</b><br>HECE loans originated</h3>\n<h3><br><b>$1.7&nbsp;billion</b><br>Dollar volume of new loans</h3>\n<h3><br><b>23.7% increase</b><br>In year-over-year originations</h3>\n',
                           'heloc': '<h3><b>111,370</b><br>HELOCs originated</h3>\n<h3><br><b>$12.0&nbsp;billion</b><br>Dollar volume of new HELOCs</h3>\n<h3><br><b>3.7% increase</b><br>In year-over-year originations</h3>\n',
                           'mortgage': '<h3><b>882,841</b><br>Mortgages originated</h3>\n<h3><br><b>$237.6&nbsp;billion</b><br>Dollar volume of new mortgages</h3>\n<h3><br><b>63.2% increase</b><br>In year-over-year originations</h3>\n',
                           'personal-loan': '<h3><b>1.4&nbsp;million</b><br>Personal loans originated</h3>\n<h3><br><b>$7.7&nbsp;billion</b><br>Dollar volume of new loans</h3>\n<h3><br><b>4.8% decrease</b><br>In year-over-year originations</h3>\n',
                           'retail-loan': '<h3><b>5.1&nbsp;million</b><br>Retail loans originated</h3>\n<h3><br><b>$11.6&nbsp;billion</b><br>Dollar volume of new loans</h3>\n<h3><br><b>0.7% increase</b><br>In year-over-year originations</h3>\n',
                           'student-loan': '<h3><b>474,155</b><br>Student loans originated</h3>\n<h3><br><b>$9.5&nbsp;billion</b><br>Dollar volume of new loans</h3>\n<h3><br><b>18.8% increase</b><br>In year-over-year originations</h3>\n'}

        self.assertEqual(pid.process_snapshot_inputdata(data), expected_output)

if __name__ == '__main__':
    unittest.main()
