/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 475.0, "series": [{"data": [[0.0, 5.0], [0.1, 9.0], [0.2, 11.0], [0.3, 13.0], [0.4, 15.0], [0.5, 18.0], [0.6, 20.0], [0.7, 22.0], [0.8, 23.0], [0.9, 26.0], [1.0, 28.0], [1.1, 29.0], [1.2, 31.0], [1.3, 32.0], [1.4, 32.0], [1.5, 33.0], [1.6, 34.0], [1.7, 35.0], [1.8, 36.0], [1.9, 38.0], [2.0, 40.0], [2.1, 41.0], [2.2, 42.0], [2.3, 43.0], [2.4, 44.0], [2.5, 45.0], [2.6, 46.0], [2.7, 46.0], [2.8, 48.0], [2.9, 50.0], [3.0, 51.0], [3.1, 52.0], [3.2, 52.0], [3.3, 53.0], [3.4, 54.0], [3.5, 54.0], [3.6, 55.0], [3.7, 55.0], [3.8, 56.0], [3.9, 56.0], [4.0, 57.0], [4.1, 57.0], [4.2, 58.0], [4.3, 58.0], [4.4, 58.0], [4.5, 59.0], [4.6, 59.0], [4.7, 60.0], [4.8, 61.0], [4.9, 61.0], [5.0, 62.0], [5.1, 63.0], [5.2, 63.0], [5.3, 64.0], [5.4, 64.0], [5.5, 65.0], [5.6, 65.0], [5.7, 66.0], [5.8, 66.0], [5.9, 66.0], [6.0, 67.0], [6.1, 67.0], [6.2, 67.0], [6.3, 67.0], [6.4, 67.0], [6.5, 67.0], [6.6, 68.0], [6.7, 68.0], [6.8, 68.0], [6.9, 68.0], [7.0, 68.0], [7.1, 68.0], [7.2, 68.0], [7.3, 68.0], [7.4, 68.0], [7.5, 68.0], [7.6, 68.0], [7.7, 69.0], [7.8, 69.0], [7.9, 69.0], [8.0, 69.0], [8.1, 69.0], [8.2, 69.0], [8.3, 69.0], [8.4, 69.0], [8.5, 69.0], [8.6, 69.0], [8.7, 69.0], [8.8, 69.0], [8.9, 69.0], [9.0, 69.0], [9.1, 69.0], [9.2, 69.0], [9.3, 69.0], [9.4, 70.0], [9.5, 70.0], [9.6, 70.0], [9.7, 70.0], [9.8, 70.0], [9.9, 70.0], [10.0, 70.0], [10.1, 70.0], [10.2, 70.0], [10.3, 70.0], [10.4, 70.0], [10.5, 70.0], [10.6, 70.0], [10.7, 70.0], [10.8, 70.0], [10.9, 70.0], [11.0, 70.0], [11.1, 70.0], [11.2, 70.0], [11.3, 70.0], [11.4, 70.0], [11.5, 70.0], [11.6, 70.0], [11.7, 71.0], [11.8, 71.0], [11.9, 71.0], [12.0, 71.0], [12.1, 71.0], [12.2, 71.0], [12.3, 71.0], [12.4, 71.0], [12.5, 71.0], [12.6, 71.0], [12.7, 71.0], [12.8, 71.0], [12.9, 71.0], [13.0, 71.0], [13.1, 71.0], [13.2, 71.0], [13.3, 71.0], [13.4, 71.0], [13.5, 71.0], [13.6, 71.0], [13.7, 71.0], [13.8, 71.0], [13.9, 71.0], [14.0, 71.0], [14.1, 71.0], [14.2, 71.0], [14.3, 71.0], [14.4, 71.0], [14.5, 71.0], [14.6, 71.0], [14.7, 71.0], [14.8, 71.0], [14.9, 71.0], [15.0, 72.0], [15.1, 72.0], [15.2, 72.0], [15.3, 72.0], [15.4, 72.0], [15.5, 72.0], [15.6, 72.0], [15.7, 72.0], [15.8, 72.0], [15.9, 72.0], [16.0, 72.0], [16.1, 72.0], [16.2, 72.0], [16.3, 72.0], [16.4, 72.0], [16.5, 72.0], [16.6, 72.0], [16.7, 72.0], [16.8, 72.0], [16.9, 72.0], [17.0, 72.0], [17.1, 72.0], [17.2, 72.0], [17.3, 72.0], [17.4, 72.0], [17.5, 72.0], [17.6, 72.0], [17.7, 72.0], [17.8, 72.0], [17.9, 72.0], [18.0, 72.0], [18.1, 72.0], [18.2, 72.0], [18.3, 72.0], [18.4, 72.0], [18.5, 72.0], [18.6, 72.0], [18.7, 72.0], [18.8, 72.0], [18.9, 72.0], [19.0, 72.0], [19.1, 73.0], [19.2, 73.0], [19.3, 73.0], [19.4, 73.0], [19.5, 73.0], [19.6, 73.0], [19.7, 73.0], [19.8, 73.0], [19.9, 73.0], [20.0, 73.0], [20.1, 73.0], [20.2, 73.0], [20.3, 73.0], [20.4, 73.0], [20.5, 73.0], [20.6, 73.0], [20.7, 73.0], [20.8, 73.0], [20.9, 73.0], [21.0, 73.0], [21.1, 73.0], [21.2, 73.0], [21.3, 73.0], [21.4, 73.0], [21.5, 73.0], [21.6, 73.0], [21.7, 73.0], [21.8, 73.0], [21.9, 73.0], [22.0, 73.0], [22.1, 73.0], [22.2, 73.0], [22.3, 73.0], [22.4, 73.0], [22.5, 73.0], [22.6, 73.0], [22.7, 73.0], [22.8, 74.0], [22.9, 74.0], [23.0, 74.0], [23.1, 74.0], [23.2, 74.0], [23.3, 74.0], [23.4, 74.0], [23.5, 74.0], [23.6, 74.0], [23.7, 74.0], [23.8, 74.0], [23.9, 74.0], [24.0, 74.0], [24.1, 74.0], [24.2, 74.0], [24.3, 74.0], [24.4, 74.0], [24.5, 74.0], [24.6, 74.0], [24.7, 74.0], [24.8, 74.0], [24.9, 74.0], [25.0, 74.0], [25.1, 74.0], [25.2, 74.0], [25.3, 74.0], [25.4, 74.0], [25.5, 74.0], [25.6, 74.0], [25.7, 74.0], [25.8, 74.0], [25.9, 74.0], [26.0, 74.0], [26.1, 74.0], [26.2, 75.0], [26.3, 75.0], [26.4, 75.0], [26.5, 75.0], [26.6, 75.0], [26.7, 75.0], [26.8, 75.0], [26.9, 75.0], [27.0, 75.0], [27.1, 75.0], [27.2, 75.0], [27.3, 75.0], [27.4, 75.0], [27.5, 75.0], [27.6, 75.0], [27.7, 75.0], [27.8, 75.0], [27.9, 75.0], [28.0, 75.0], [28.1, 75.0], [28.2, 75.0], [28.3, 75.0], [28.4, 75.0], [28.5, 75.0], [28.6, 75.0], [28.7, 75.0], [28.8, 75.0], [28.9, 75.0], [29.0, 75.0], [29.1, 75.0], [29.2, 75.0], [29.3, 75.0], [29.4, 75.0], [29.5, 75.0], [29.6, 75.0], [29.7, 76.0], [29.8, 76.0], [29.9, 76.0], [30.0, 76.0], [30.1, 76.0], [30.2, 76.0], [30.3, 76.0], [30.4, 76.0], [30.5, 76.0], [30.6, 76.0], [30.7, 76.0], [30.8, 76.0], [30.9, 76.0], [31.0, 76.0], [31.1, 76.0], [31.2, 76.0], [31.3, 76.0], [31.4, 76.0], [31.5, 76.0], [31.6, 76.0], [31.7, 76.0], [31.8, 76.0], [31.9, 76.0], [32.0, 76.0], [32.1, 76.0], [32.2, 76.0], [32.3, 76.0], [32.4, 76.0], [32.5, 76.0], [32.6, 76.0], [32.7, 76.0], [32.8, 76.0], [32.9, 76.0], [33.0, 76.0], [33.1, 76.0], [33.2, 76.0], [33.3, 77.0], [33.4, 77.0], [33.5, 77.0], [33.6, 77.0], [33.7, 77.0], [33.8, 77.0], [33.9, 77.0], [34.0, 77.0], [34.1, 77.0], [34.2, 77.0], [34.3, 77.0], [34.4, 77.0], [34.5, 77.0], [34.6, 77.0], [34.7, 77.0], [34.8, 77.0], [34.9, 77.0], [35.0, 77.0], [35.1, 77.0], [35.2, 77.0], [35.3, 77.0], [35.4, 77.0], [35.5, 77.0], [35.6, 77.0], [35.7, 77.0], [35.8, 77.0], [35.9, 77.0], [36.0, 77.0], [36.1, 77.0], [36.2, 77.0], [36.3, 77.0], [36.4, 77.0], [36.5, 77.0], [36.6, 77.0], [36.7, 77.0], [36.8, 77.0], [36.9, 77.0], [37.0, 77.0], [37.1, 77.0], [37.2, 78.0], [37.3, 78.0], [37.4, 78.0], [37.5, 78.0], [37.6, 78.0], [37.7, 78.0], [37.8, 78.0], [37.9, 78.0], [38.0, 78.0], [38.1, 78.0], [38.2, 78.0], [38.3, 78.0], [38.4, 78.0], [38.5, 78.0], [38.6, 78.0], [38.7, 78.0], [38.8, 78.0], [38.9, 78.0], [39.0, 78.0], [39.1, 78.0], [39.2, 78.0], [39.3, 78.0], [39.4, 78.0], [39.5, 78.0], [39.6, 78.0], [39.7, 78.0], [39.8, 78.0], [39.9, 78.0], [40.0, 78.0], [40.1, 78.0], [40.2, 78.0], [40.3, 78.0], [40.4, 78.0], [40.5, 78.0], [40.6, 78.0], [40.7, 78.0], [40.8, 78.0], [40.9, 79.0], [41.0, 79.0], [41.1, 79.0], [41.2, 79.0], [41.3, 79.0], [41.4, 79.0], [41.5, 79.0], [41.6, 79.0], [41.7, 79.0], [41.8, 79.0], [41.9, 79.0], [42.0, 79.0], [42.1, 79.0], [42.2, 79.0], [42.3, 79.0], [42.4, 79.0], [42.5, 79.0], [42.6, 79.0], [42.7, 79.0], [42.8, 79.0], [42.9, 79.0], [43.0, 79.0], [43.1, 79.0], [43.2, 79.0], [43.3, 79.0], [43.4, 79.0], [43.5, 79.0], [43.6, 79.0], [43.7, 79.0], [43.8, 79.0], [43.9, 79.0], [44.0, 79.0], [44.1, 80.0], [44.2, 80.0], [44.3, 80.0], [44.4, 80.0], [44.5, 80.0], [44.6, 80.0], [44.7, 80.0], [44.8, 80.0], [44.9, 80.0], [45.0, 80.0], [45.1, 80.0], [45.2, 80.0], [45.3, 80.0], [45.4, 80.0], [45.5, 80.0], [45.6, 80.0], [45.7, 80.0], [45.8, 80.0], [45.9, 80.0], [46.0, 80.0], [46.1, 80.0], [46.2, 80.0], [46.3, 80.0], [46.4, 80.0], [46.5, 80.0], [46.6, 80.0], [46.7, 80.0], [46.8, 81.0], [46.9, 81.0], [47.0, 81.0], [47.1, 81.0], [47.2, 81.0], [47.3, 81.0], [47.4, 81.0], [47.5, 81.0], [47.6, 81.0], [47.7, 81.0], [47.8, 81.0], [47.9, 81.0], [48.0, 81.0], [48.1, 81.0], [48.2, 81.0], [48.3, 81.0], [48.4, 81.0], [48.5, 81.0], [48.6, 81.0], [48.7, 81.0], [48.8, 81.0], [48.9, 81.0], [49.0, 81.0], [49.1, 81.0], [49.2, 82.0], [49.3, 82.0], [49.4, 82.0], [49.5, 82.0], [49.6, 82.0], [49.7, 82.0], [49.8, 82.0], [49.9, 82.0], [50.0, 82.0], [50.1, 82.0], [50.2, 82.0], [50.3, 82.0], [50.4, 82.0], [50.5, 82.0], [50.6, 82.0], [50.7, 82.0], [50.8, 82.0], [50.9, 82.0], [51.0, 82.0], [51.1, 83.0], [51.2, 83.0], [51.3, 83.0], [51.4, 83.0], [51.5, 83.0], [51.6, 83.0], [51.7, 83.0], [51.8, 83.0], [51.9, 83.0], [52.0, 83.0], [52.1, 83.0], [52.2, 83.0], [52.3, 83.0], [52.4, 83.0], [52.5, 83.0], [52.6, 83.0], [52.7, 83.0], [52.8, 83.0], [52.9, 83.0], [53.0, 84.0], [53.1, 84.0], [53.2, 84.0], [53.3, 84.0], [53.4, 84.0], [53.5, 84.0], [53.6, 84.0], [53.7, 84.0], [53.8, 84.0], [53.9, 84.0], [54.0, 84.0], [54.1, 84.0], [54.2, 84.0], [54.3, 84.0], [54.4, 84.0], [54.5, 84.0], [54.6, 84.0], [54.7, 84.0], [54.8, 84.0], [54.9, 84.0], [55.0, 84.0], [55.1, 84.0], [55.2, 84.0], [55.3, 84.0], [55.4, 85.0], [55.5, 85.0], [55.6, 85.0], [55.7, 85.0], [55.8, 85.0], [55.9, 85.0], [56.0, 85.0], [56.1, 85.0], [56.2, 85.0], [56.3, 85.0], [56.4, 85.0], [56.5, 85.0], [56.6, 85.0], [56.7, 85.0], [56.8, 85.0], [56.9, 85.0], [57.0, 85.0], [57.1, 85.0], [57.2, 85.0], [57.3, 85.0], [57.4, 85.0], [57.5, 86.0], [57.6, 86.0], [57.7, 86.0], [57.8, 86.0], [57.9, 86.0], [58.0, 86.0], [58.1, 86.0], [58.2, 86.0], [58.3, 86.0], [58.4, 86.0], [58.5, 86.0], [58.6, 86.0], [58.7, 86.0], [58.8, 86.0], [58.9, 86.0], [59.0, 86.0], [59.1, 86.0], [59.2, 86.0], [59.3, 86.0], [59.4, 86.0], [59.5, 86.0], [59.6, 87.0], [59.7, 87.0], [59.8, 87.0], [59.9, 87.0], [60.0, 87.0], [60.1, 87.0], [60.2, 87.0], [60.3, 87.0], [60.4, 87.0], [60.5, 87.0], [60.6, 87.0], [60.7, 87.0], [60.8, 87.0], [60.9, 87.0], [61.0, 87.0], [61.1, 87.0], [61.2, 87.0], [61.3, 87.0], [61.4, 87.0], [61.5, 87.0], [61.6, 88.0], [61.7, 88.0], [61.8, 88.0], [61.9, 88.0], [62.0, 88.0], [62.1, 88.0], [62.2, 88.0], [62.3, 88.0], [62.4, 88.0], [62.5, 88.0], [62.6, 88.0], [62.7, 88.0], [62.8, 88.0], [62.9, 88.0], [63.0, 88.0], [63.1, 88.0], [63.2, 88.0], [63.3, 88.0], [63.4, 88.0], [63.5, 89.0], [63.6, 89.0], [63.7, 89.0], [63.8, 89.0], [63.9, 89.0], [64.0, 89.0], [64.1, 89.0], [64.2, 89.0], [64.3, 89.0], [64.4, 89.0], [64.5, 89.0], [64.6, 89.0], [64.7, 89.0], [64.8, 89.0], [64.9, 89.0], [65.0, 89.0], [65.1, 89.0], [65.2, 89.0], [65.3, 90.0], [65.4, 90.0], [65.5, 90.0], [65.6, 90.0], [65.7, 90.0], [65.8, 90.0], [65.9, 90.0], [66.0, 90.0], [66.1, 90.0], [66.2, 90.0], [66.3, 90.0], [66.4, 90.0], [66.5, 90.0], [66.6, 90.0], [66.7, 90.0], [66.8, 91.0], [66.9, 91.0], [67.0, 91.0], [67.1, 91.0], [67.2, 91.0], [67.3, 91.0], [67.4, 91.0], [67.5, 91.0], [67.6, 91.0], [67.7, 91.0], [67.8, 91.0], [67.9, 91.0], [68.0, 91.0], [68.1, 91.0], [68.2, 91.0], [68.3, 91.0], [68.4, 91.0], [68.5, 91.0], [68.6, 92.0], [68.7, 92.0], [68.8, 92.0], [68.9, 92.0], [69.0, 92.0], [69.1, 92.0], [69.2, 92.0], [69.3, 92.0], [69.4, 92.0], [69.5, 92.0], [69.6, 92.0], [69.7, 92.0], [69.8, 92.0], [69.9, 92.0], [70.0, 92.0], [70.1, 92.0], [70.2, 93.0], [70.3, 93.0], [70.4, 93.0], [70.5, 93.0], [70.6, 93.0], [70.7, 93.0], [70.8, 93.0], [70.9, 93.0], [71.0, 93.0], [71.1, 93.0], [71.2, 93.0], [71.3, 93.0], [71.4, 93.0], [71.5, 93.0], [71.6, 93.0], [71.7, 94.0], [71.8, 94.0], [71.9, 94.0], [72.0, 94.0], [72.1, 94.0], [72.2, 94.0], [72.3, 94.0], [72.4, 94.0], [72.5, 94.0], [72.6, 94.0], [72.7, 94.0], [72.8, 94.0], [72.9, 94.0], [73.0, 94.0], [73.1, 94.0], [73.2, 95.0], [73.3, 95.0], [73.4, 95.0], [73.5, 95.0], [73.6, 95.0], [73.7, 95.0], [73.8, 95.0], [73.9, 95.0], [74.0, 95.0], [74.1, 95.0], [74.2, 95.0], [74.3, 95.0], [74.4, 95.0], [74.5, 95.0], [74.6, 95.0], [74.7, 96.0], [74.8, 96.0], [74.9, 96.0], [75.0, 96.0], [75.1, 96.0], [75.2, 96.0], [75.3, 96.0], [75.4, 96.0], [75.5, 96.0], [75.6, 96.0], [75.7, 96.0], [75.8, 96.0], [75.9, 97.0], [76.0, 97.0], [76.1, 97.0], [76.2, 97.0], [76.3, 97.0], [76.4, 97.0], [76.5, 97.0], [76.6, 97.0], [76.7, 97.0], [76.8, 97.0], [76.9, 97.0], [77.0, 98.0], [77.1, 98.0], [77.2, 98.0], [77.3, 98.0], [77.4, 98.0], [77.5, 98.0], [77.6, 98.0], [77.7, 98.0], [77.8, 98.0], [77.9, 98.0], [78.0, 98.0], [78.1, 99.0], [78.2, 99.0], [78.3, 99.0], [78.4, 99.0], [78.5, 99.0], [78.6, 99.0], [78.7, 99.0], [78.8, 99.0], [78.9, 99.0], [79.0, 100.0], [79.1, 100.0], [79.2, 100.0], [79.3, 100.0], [79.4, 100.0], [79.5, 100.0], [79.6, 100.0], [79.7, 100.0], [79.8, 100.0], [79.9, 100.0], [80.0, 101.0], [80.1, 101.0], [80.2, 101.0], [80.3, 101.0], [80.4, 101.0], [80.5, 101.0], [80.6, 101.0], [80.7, 101.0], [80.8, 102.0], [80.9, 102.0], [81.0, 102.0], [81.1, 102.0], [81.2, 102.0], [81.3, 102.0], [81.4, 102.0], [81.5, 103.0], [81.6, 103.0], [81.7, 103.0], [81.8, 103.0], [81.9, 103.0], [82.0, 103.0], [82.1, 103.0], [82.2, 104.0], [82.3, 104.0], [82.4, 104.0], [82.5, 104.0], [82.6, 104.0], [82.7, 104.0], [82.8, 105.0], [82.9, 105.0], [83.0, 105.0], [83.1, 105.0], [83.2, 105.0], [83.3, 105.0], [83.4, 105.0], [83.5, 106.0], [83.6, 106.0], [83.7, 106.0], [83.8, 106.0], [83.9, 106.0], [84.0, 106.0], [84.1, 107.0], [84.2, 107.0], [84.3, 107.0], [84.4, 107.0], [84.5, 108.0], [84.6, 108.0], [84.7, 108.0], [84.8, 108.0], [84.9, 108.0], [85.0, 108.0], [85.1, 109.0], [85.2, 109.0], [85.3, 109.0], [85.4, 109.0], [85.5, 109.0], [85.6, 110.0], [85.7, 110.0], [85.8, 110.0], [85.9, 110.0], [86.0, 111.0], [86.1, 111.0], [86.2, 111.0], [86.3, 111.0], [86.4, 112.0], [86.5, 112.0], [86.6, 112.0], [86.7, 112.0], [86.8, 112.0], [86.9, 113.0], [87.0, 113.0], [87.1, 113.0], [87.2, 113.0], [87.3, 113.0], [87.4, 114.0], [87.5, 114.0], [87.6, 114.0], [87.7, 114.0], [87.8, 114.0], [87.9, 115.0], [88.0, 115.0], [88.1, 115.0], [88.2, 115.0], [88.3, 115.0], [88.4, 115.0], [88.5, 116.0], [88.6, 116.0], [88.7, 116.0], [88.8, 116.0], [88.9, 116.0], [89.0, 117.0], [89.1, 117.0], [89.2, 117.0], [89.3, 117.0], [89.4, 118.0], [89.5, 118.0], [89.6, 118.0], [89.7, 119.0], [89.8, 119.0], [89.9, 119.0], [90.0, 120.0], [90.1, 120.0], [90.2, 120.0], [90.3, 120.0], [90.4, 120.0], [90.5, 121.0], [90.6, 121.0], [90.7, 121.0], [90.8, 121.0], [90.9, 122.0], [91.0, 122.0], [91.1, 122.0], [91.2, 122.0], [91.3, 123.0], [91.4, 123.0], [91.5, 123.0], [91.6, 124.0], [91.7, 124.0], [91.8, 124.0], [91.9, 124.0], [92.0, 124.0], [92.1, 125.0], [92.2, 125.0], [92.3, 126.0], [92.4, 126.0], [92.5, 126.0], [92.6, 126.0], [92.7, 127.0], [92.8, 127.0], [92.9, 127.0], [93.0, 128.0], [93.1, 128.0], [93.2, 129.0], [93.3, 129.0], [93.4, 130.0], [93.5, 130.0], [93.6, 130.0], [93.7, 131.0], [93.8, 131.0], [93.9, 131.0], [94.0, 132.0], [94.1, 132.0], [94.2, 133.0], [94.3, 133.0], [94.4, 134.0], [94.5, 134.0], [94.6, 135.0], [94.7, 136.0], [94.8, 137.0], [94.9, 137.0], [95.0, 138.0], [95.1, 139.0], [95.2, 141.0], [95.3, 142.0], [95.4, 143.0], [95.5, 144.0], [95.6, 145.0], [95.7, 146.0], [95.8, 147.0], [95.9, 147.0], [96.0, 148.0], [96.1, 149.0], [96.2, 149.0], [96.3, 150.0], [96.4, 152.0], [96.5, 153.0], [96.6, 153.0], [96.7, 154.0], [96.8, 155.0], [96.9, 156.0], [97.0, 157.0], [97.1, 158.0], [97.2, 159.0], [97.3, 160.0], [97.4, 161.0], [97.5, 162.0], [97.6, 164.0], [97.7, 164.0], [97.8, 165.0], [97.9, 166.0], [98.0, 167.0], [98.1, 169.0], [98.2, 171.0], [98.3, 173.0], [98.4, 174.0], [98.5, 175.0], [98.6, 177.0], [98.7, 179.0], [98.8, 182.0], [98.9, 187.0], [99.0, 192.0], [99.1, 195.0], [99.2, 200.0], [99.3, 205.0], [99.4, 212.0], [99.5, 220.0], [99.6, 228.0], [99.7, 232.0], [99.8, 259.0], [99.9, 316.0], [100.0, 475.0]], "isOverall": false, "label": "GET /api/hello", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 30.0, "minX": 0.0, "maxY": 44638.0, "series": [{"data": [[0.0, 44638.0], [300.0, 38.0], [100.0, 11462.0], [200.0, 388.0], [400.0, 30.0]], "isOverall": false, "label": "GET /api/hello", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 56556.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 56556.0, "series": [{"data": [[0.0, 56556.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 91.510891859396, "minX": 1.78269396E12, "maxY": 91.510891859396, "series": [{"data": [[1.78269396E12, 91.510891859396]], "isOverall": false, "label": "100 usuarios concurrentes - 30s", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78269396E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 15.466666666666661, "minX": 1.0, "maxY": 232.6206896551724, "series": [{"data": [[2.0, 130.0], [3.0, 192.0], [4.0, 35.2], [5.0, 15.466666666666661], [6.0, 20.842105263157897], [7.0, 22.625000000000007], [8.0, 17.416666666666668], [9.0, 25.515151515151512], [10.0, 23.307692307692307], [11.0, 33.84848484848485], [12.0, 34.050000000000004], [13.0, 33.74285714285715], [14.0, 43.514285714285705], [15.0, 40.39473684210527], [16.0, 52.81818181818182], [17.0, 40.874999999999986], [18.0, 42.32558139534883], [19.0, 75.09090909090911], [20.0, 65.79411764705884], [21.0, 53.92500000000001], [23.0, 189.89999999999995], [24.0, 85.67567567567569], [25.0, 46.15151515151516], [26.0, 54.46666666666666], [27.0, 56.64000000000001], [28.0, 47.4], [29.0, 54.20370370370372], [30.0, 46.47142857142856], [31.0, 45.65671641791045], [32.0, 65.00000000000003], [33.0, 66.09259259259258], [34.0, 52.296875], [35.0, 75.02173913043474], [36.0, 88.14285714285718], [37.0, 75.82758620689654], [38.0, 75.31249999999997], [39.0, 81.91999999999997], [40.0, 66.10714285714286], [41.0, 75.01538461538465], [42.0, 57.19117647058824], [43.0, 77.70175438596492], [44.0, 63.119402985074636], [45.0, 74.78461538461536], [46.0, 73.38333333333335], [47.0, 104.72222222222221], [48.0, 100.20754716981135], [49.0, 82.16923076923075], [50.0, 73.8450704225352], [51.0, 80.62962962962958], [52.0, 83.98648648648647], [53.0, 61.12222222222222], [54.0, 70.57499999999996], [55.0, 79.15517241379314], [56.0, 87.49999999999997], [57.0, 87.30136986301375], [58.0, 82.11764705882355], [59.0, 91.39393939393938], [60.0, 94.48387096774195], [61.0, 92.80000000000003], [62.0, 85.2285714285714], [63.0, 111.71428571428572], [64.0, 174.36363636363637], [65.0, 232.6206896551724], [66.0, 169.54], [67.0, 156.6744186046512], [68.0, 169.84090909090907], [69.0, 120.3823529411764], [70.0, 83.51219512195124], [71.0, 90.82432432432432], [72.0, 88.66666666666664], [73.0, 95.49367088607592], [74.0, 73.1078431372549], [75.0, 81.31632653061219], [76.0, 71.14414414414415], [77.0, 80.29032258064514], [78.0, 84.64444444444449], [79.0, 91.25287356321834], [80.0, 86.48351648351645], [81.0, 100.67187500000004], [82.0, 122.61971830985918], [83.0, 114.29166666666664], [84.0, 112.61249999999998], [85.0, 101.13333333333331], [86.0, 87.63888888888889], [87.0, 75.4285714285714], [88.0, 76.89108910891082], [89.0, 88.34], [90.0, 97.1648351648351], [91.0, 93.50980392156865], [92.0, 90.82474226804125], [93.0, 95.0], [94.0, 95.23232323232322], [95.0, 120.78125000000001], [96.0, 116.1212121212122], [97.0, 118.30769230769234], [98.0, 168.7037037037037], [99.0, 174.90740740740742], [100.0, 90.0831880559655], [1.0, 131.0]], "isOverall": false, "label": "GET /api/hello", "isController": false}, {"data": [[91.510891859396, 88.69258787750216]], "isOverall": false, "label": "GET /api/hello-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 118767.6, "minX": 1.78269396E12, "maxY": 283722.6, "series": [{"data": [[1.78269396E12, 283722.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78269396E12, 118767.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78269396E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 88.69258787750216, "minX": 1.78269396E12, "maxY": 88.69258787750216, "series": [{"data": [[1.78269396E12, 88.69258787750216]], "isOverall": false, "label": "GET /api/hello", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78269396E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 88.6810948440494, "minX": 1.78269396E12, "maxY": 88.6810948440494, "series": [{"data": [[1.78269396E12, 88.6810948440494]], "isOverall": false, "label": "GET /api/hello", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78269396E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.010502864417568493, "minX": 1.78269396E12, "maxY": 0.010502864417568493, "series": [{"data": [[1.78269396E12, 0.010502864417568493]], "isOverall": false, "label": "GET /api/hello", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78269396E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 5.0, "minX": 1.78269396E12, "maxY": 475.0, "series": [{"data": [[1.78269396E12, 475.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78269396E12, 5.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78269396E12, 106.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78269396E12, 158.9900000000016]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78269396E12, 80.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78269396E12, 116.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78269396E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 16.0, "minX": 346.0, "maxY": 111.0, "series": [{"data": [[700.0, 33.0], [828.0, 49.0], [1010.0, 104.0], [1056.0, 64.0], [1170.0, 71.0], [1350.0, 77.0], [1572.0, 95.0], [1770.0, 87.0], [1794.0, 80.0], [1834.0, 100.0], [1830.0, 111.0], [1872.0, 87.0], [1932.0, 102.0], [1962.0, 89.0], [2004.0, 96.0], [2130.0, 91.0], [2076.0, 99.0], [2178.0, 81.0], [2250.0, 87.0], [2284.0, 82.0], [2354.0, 80.0], [2316.0, 84.0], [2332.0, 81.0], [2488.0, 76.0], [2546.0, 76.0], [2548.0, 75.0], [2512.0, 77.0], [346.0, 79.0], [454.0, 16.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2548.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 16.0, "minX": 346.0, "maxY": 111.0, "series": [{"data": [[700.0, 33.0], [828.0, 49.0], [1010.0, 104.0], [1056.0, 64.0], [1170.0, 71.0], [1350.0, 77.0], [1572.0, 95.0], [1770.0, 87.0], [1794.0, 80.0], [1834.0, 100.0], [1830.0, 111.0], [1872.0, 87.0], [1932.0, 102.0], [1962.0, 89.0], [2004.0, 96.0], [2130.0, 91.0], [2076.0, 99.0], [2178.0, 81.0], [2250.0, 87.0], [2284.0, 82.0], [2354.0, 80.0], [2316.0, 84.0], [2332.0, 81.0], [2488.0, 76.0], [2546.0, 76.0], [2548.0, 75.0], [2512.0, 77.0], [346.0, 79.0], [454.0, 16.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2548.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 942.6, "minX": 1.78269396E12, "maxY": 942.6, "series": [{"data": [[1.78269396E12, 942.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78269396E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 942.6, "minX": 1.78269396E12, "maxY": 942.6, "series": [{"data": [[1.78269396E12, 942.6]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78269396E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 942.6, "minX": 1.78269396E12, "maxY": 942.6, "series": [{"data": [[1.78269396E12, 942.6]], "isOverall": false, "label": "GET /api/hello-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78269396E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 942.6, "minX": 1.78269396E12, "maxY": 942.6, "series": [{"data": [[1.78269396E12, 942.6]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78269396E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

