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
        data: {"result": {"minY": 8.0, "minX": 0.0, "maxY": 402.0, "series": [{"data": [[0.0, 8.0], [0.1, 12.0], [0.2, 14.0], [0.3, 15.0], [0.4, 16.0], [0.5, 17.0], [0.6, 18.0], [0.7, 19.0], [0.8, 20.0], [0.9, 21.0], [1.0, 22.0], [1.1, 23.0], [1.2, 24.0], [1.3, 25.0], [1.4, 26.0], [1.5, 27.0], [1.6, 29.0], [1.7, 30.0], [1.8, 32.0], [1.9, 33.0], [2.0, 34.0], [2.1, 35.0], [2.2, 35.0], [2.3, 36.0], [2.4, 37.0], [2.5, 38.0], [2.6, 39.0], [2.7, 40.0], [2.8, 42.0], [2.9, 44.0], [3.0, 45.0], [3.1, 46.0], [3.2, 47.0], [3.3, 48.0], [3.4, 48.0], [3.5, 49.0], [3.6, 50.0], [3.7, 51.0], [3.8, 52.0], [3.9, 52.0], [4.0, 53.0], [4.1, 54.0], [4.2, 54.0], [4.3, 55.0], [4.4, 56.0], [4.5, 56.0], [4.6, 57.0], [4.7, 58.0], [4.8, 59.0], [4.9, 60.0], [5.0, 61.0], [5.1, 62.0], [5.2, 62.0], [5.3, 63.0], [5.4, 64.0], [5.5, 64.0], [5.6, 64.0], [5.7, 65.0], [5.8, 65.0], [5.9, 65.0], [6.0, 65.0], [6.1, 65.0], [6.2, 65.0], [6.3, 66.0], [6.4, 66.0], [6.5, 66.0], [6.6, 66.0], [6.7, 66.0], [6.8, 66.0], [6.9, 66.0], [7.0, 66.0], [7.1, 67.0], [7.2, 67.0], [7.3, 67.0], [7.4, 67.0], [7.5, 67.0], [7.6, 67.0], [7.7, 67.0], [7.8, 67.0], [7.9, 68.0], [8.0, 68.0], [8.1, 68.0], [8.2, 68.0], [8.3, 68.0], [8.4, 68.0], [8.5, 68.0], [8.6, 68.0], [8.7, 68.0], [8.8, 68.0], [8.9, 68.0], [9.0, 68.0], [9.1, 69.0], [9.2, 69.0], [9.3, 69.0], [9.4, 69.0], [9.5, 69.0], [9.6, 69.0], [9.7, 69.0], [9.8, 69.0], [9.9, 69.0], [10.0, 69.0], [10.1, 69.0], [10.2, 69.0], [10.3, 69.0], [10.4, 69.0], [10.5, 69.0], [10.6, 70.0], [10.7, 70.0], [10.8, 70.0], [10.9, 70.0], [11.0, 70.0], [11.1, 70.0], [11.2, 70.0], [11.3, 70.0], [11.4, 70.0], [11.5, 70.0], [11.6, 70.0], [11.7, 70.0], [11.8, 70.0], [11.9, 70.0], [12.0, 70.0], [12.1, 70.0], [12.2, 70.0], [12.3, 71.0], [12.4, 71.0], [12.5, 71.0], [12.6, 71.0], [12.7, 71.0], [12.8, 71.0], [12.9, 71.0], [13.0, 71.0], [13.1, 71.0], [13.2, 71.0], [13.3, 71.0], [13.4, 71.0], [13.5, 71.0], [13.6, 71.0], [13.7, 71.0], [13.8, 71.0], [13.9, 71.0], [14.0, 71.0], [14.1, 72.0], [14.2, 72.0], [14.3, 72.0], [14.4, 72.0], [14.5, 72.0], [14.6, 72.0], [14.7, 72.0], [14.8, 72.0], [14.9, 72.0], [15.0, 72.0], [15.1, 72.0], [15.2, 72.0], [15.3, 72.0], [15.4, 72.0], [15.5, 72.0], [15.6, 72.0], [15.7, 72.0], [15.8, 72.0], [15.9, 72.0], [16.0, 72.0], [16.1, 73.0], [16.2, 73.0], [16.3, 73.0], [16.4, 73.0], [16.5, 73.0], [16.6, 73.0], [16.7, 73.0], [16.8, 73.0], [16.9, 73.0], [17.0, 73.0], [17.1, 73.0], [17.2, 73.0], [17.3, 73.0], [17.4, 73.0], [17.5, 73.0], [17.6, 73.0], [17.7, 73.0], [17.8, 73.0], [17.9, 73.0], [18.0, 73.0], [18.1, 73.0], [18.2, 73.0], [18.3, 73.0], [18.4, 73.0], [18.5, 74.0], [18.6, 74.0], [18.7, 74.0], [18.8, 74.0], [18.9, 74.0], [19.0, 74.0], [19.1, 74.0], [19.2, 74.0], [19.3, 74.0], [19.4, 74.0], [19.5, 74.0], [19.6, 74.0], [19.7, 74.0], [19.8, 74.0], [19.9, 74.0], [20.0, 74.0], [20.1, 74.0], [20.2, 74.0], [20.3, 74.0], [20.4, 74.0], [20.5, 74.0], [20.6, 74.0], [20.7, 74.0], [20.8, 74.0], [20.9, 74.0], [21.0, 74.0], [21.1, 74.0], [21.2, 74.0], [21.3, 74.0], [21.4, 75.0], [21.5, 75.0], [21.6, 75.0], [21.7, 75.0], [21.8, 75.0], [21.9, 75.0], [22.0, 75.0], [22.1, 75.0], [22.2, 75.0], [22.3, 75.0], [22.4, 75.0], [22.5, 75.0], [22.6, 75.0], [22.7, 75.0], [22.8, 75.0], [22.9, 75.0], [23.0, 75.0], [23.1, 75.0], [23.2, 75.0], [23.3, 75.0], [23.4, 75.0], [23.5, 75.0], [23.6, 75.0], [23.7, 75.0], [23.8, 75.0], [23.9, 75.0], [24.0, 76.0], [24.1, 76.0], [24.2, 76.0], [24.3, 76.0], [24.4, 76.0], [24.5, 76.0], [24.6, 76.0], [24.7, 76.0], [24.8, 76.0], [24.9, 76.0], [25.0, 76.0], [25.1, 76.0], [25.2, 76.0], [25.3, 76.0], [25.4, 76.0], [25.5, 76.0], [25.6, 76.0], [25.7, 76.0], [25.8, 76.0], [25.9, 76.0], [26.0, 76.0], [26.1, 76.0], [26.2, 76.0], [26.3, 76.0], [26.4, 76.0], [26.5, 77.0], [26.6, 77.0], [26.7, 77.0], [26.8, 77.0], [26.9, 77.0], [27.0, 77.0], [27.1, 77.0], [27.2, 77.0], [27.3, 77.0], [27.4, 77.0], [27.5, 77.0], [27.6, 77.0], [27.7, 77.0], [27.8, 77.0], [27.9, 77.0], [28.0, 77.0], [28.1, 77.0], [28.2, 77.0], [28.3, 77.0], [28.4, 77.0], [28.5, 77.0], [28.6, 77.0], [28.7, 77.0], [28.8, 77.0], [28.9, 78.0], [29.0, 78.0], [29.1, 78.0], [29.2, 78.0], [29.3, 78.0], [29.4, 78.0], [29.5, 78.0], [29.6, 78.0], [29.7, 78.0], [29.8, 78.0], [29.9, 78.0], [30.0, 78.0], [30.1, 78.0], [30.2, 78.0], [30.3, 78.0], [30.4, 78.0], [30.5, 78.0], [30.6, 78.0], [30.7, 78.0], [30.8, 78.0], [30.9, 78.0], [31.0, 78.0], [31.1, 78.0], [31.2, 78.0], [31.3, 78.0], [31.4, 78.0], [31.5, 79.0], [31.6, 79.0], [31.7, 79.0], [31.8, 79.0], [31.9, 79.0], [32.0, 79.0], [32.1, 79.0], [32.2, 79.0], [32.3, 79.0], [32.4, 79.0], [32.5, 79.0], [32.6, 79.0], [32.7, 79.0], [32.8, 79.0], [32.9, 79.0], [33.0, 79.0], [33.1, 79.0], [33.2, 79.0], [33.3, 79.0], [33.4, 79.0], [33.5, 79.0], [33.6, 79.0], [33.7, 79.0], [33.8, 79.0], [33.9, 79.0], [34.0, 79.0], [34.1, 79.0], [34.2, 79.0], [34.3, 80.0], [34.4, 80.0], [34.5, 80.0], [34.6, 80.0], [34.7, 80.0], [34.8, 80.0], [34.9, 80.0], [35.0, 80.0], [35.1, 80.0], [35.2, 80.0], [35.3, 80.0], [35.4, 80.0], [35.5, 80.0], [35.6, 80.0], [35.7, 80.0], [35.8, 80.0], [35.9, 80.0], [36.0, 80.0], [36.1, 80.0], [36.2, 80.0], [36.3, 80.0], [36.4, 80.0], [36.5, 80.0], [36.6, 81.0], [36.7, 81.0], [36.8, 81.0], [36.9, 81.0], [37.0, 81.0], [37.1, 81.0], [37.2, 81.0], [37.3, 81.0], [37.4, 81.0], [37.5, 81.0], [37.6, 81.0], [37.7, 81.0], [37.8, 81.0], [37.9, 81.0], [38.0, 81.0], [38.1, 81.0], [38.2, 81.0], [38.3, 81.0], [38.4, 81.0], [38.5, 81.0], [38.6, 81.0], [38.7, 81.0], [38.8, 81.0], [38.9, 81.0], [39.0, 82.0], [39.1, 82.0], [39.2, 82.0], [39.3, 82.0], [39.4, 82.0], [39.5, 82.0], [39.6, 82.0], [39.7, 82.0], [39.8, 82.0], [39.9, 82.0], [40.0, 82.0], [40.1, 82.0], [40.2, 82.0], [40.3, 82.0], [40.4, 82.0], [40.5, 82.0], [40.6, 82.0], [40.7, 82.0], [40.8, 82.0], [40.9, 82.0], [41.0, 82.0], [41.1, 82.0], [41.2, 83.0], [41.3, 83.0], [41.4, 83.0], [41.5, 83.0], [41.6, 83.0], [41.7, 83.0], [41.8, 83.0], [41.9, 83.0], [42.0, 83.0], [42.1, 83.0], [42.2, 83.0], [42.3, 83.0], [42.4, 83.0], [42.5, 83.0], [42.6, 83.0], [42.7, 83.0], [42.8, 83.0], [42.9, 83.0], [43.0, 83.0], [43.1, 83.0], [43.2, 84.0], [43.3, 84.0], [43.4, 84.0], [43.5, 84.0], [43.6, 84.0], [43.7, 84.0], [43.8, 84.0], [43.9, 84.0], [44.0, 84.0], [44.1, 84.0], [44.2, 84.0], [44.3, 84.0], [44.4, 84.0], [44.5, 84.0], [44.6, 84.0], [44.7, 84.0], [44.8, 84.0], [44.9, 84.0], [45.0, 84.0], [45.1, 84.0], [45.2, 84.0], [45.3, 84.0], [45.4, 85.0], [45.5, 85.0], [45.6, 85.0], [45.7, 85.0], [45.8, 85.0], [45.9, 85.0], [46.0, 85.0], [46.1, 85.0], [46.2, 85.0], [46.3, 85.0], [46.4, 85.0], [46.5, 85.0], [46.6, 85.0], [46.7, 85.0], [46.8, 85.0], [46.9, 85.0], [47.0, 85.0], [47.1, 85.0], [47.2, 85.0], [47.3, 85.0], [47.4, 85.0], [47.5, 85.0], [47.6, 86.0], [47.7, 86.0], [47.8, 86.0], [47.9, 86.0], [48.0, 86.0], [48.1, 86.0], [48.2, 86.0], [48.3, 86.0], [48.4, 86.0], [48.5, 86.0], [48.6, 86.0], [48.7, 86.0], [48.8, 86.0], [48.9, 86.0], [49.0, 86.0], [49.1, 86.0], [49.2, 86.0], [49.3, 86.0], [49.4, 86.0], [49.5, 86.0], [49.6, 86.0], [49.7, 87.0], [49.8, 87.0], [49.9, 87.0], [50.0, 87.0], [50.1, 87.0], [50.2, 87.0], [50.3, 87.0], [50.4, 87.0], [50.5, 87.0], [50.6, 87.0], [50.7, 87.0], [50.8, 87.0], [50.9, 87.0], [51.0, 87.0], [51.1, 87.0], [51.2, 87.0], [51.3, 87.0], [51.4, 87.0], [51.5, 87.0], [51.6, 87.0], [51.7, 88.0], [51.8, 88.0], [51.9, 88.0], [52.0, 88.0], [52.1, 88.0], [52.2, 88.0], [52.3, 88.0], [52.4, 88.0], [52.5, 88.0], [52.6, 88.0], [52.7, 88.0], [52.8, 88.0], [52.9, 88.0], [53.0, 88.0], [53.1, 88.0], [53.2, 88.0], [53.3, 88.0], [53.4, 88.0], [53.5, 88.0], [53.6, 88.0], [53.7, 88.0], [53.8, 88.0], [53.9, 88.0], [54.0, 88.0], [54.1, 89.0], [54.2, 89.0], [54.3, 89.0], [54.4, 89.0], [54.5, 89.0], [54.6, 89.0], [54.7, 89.0], [54.8, 89.0], [54.9, 89.0], [55.0, 89.0], [55.1, 89.0], [55.2, 89.0], [55.3, 89.0], [55.4, 89.0], [55.5, 89.0], [55.6, 89.0], [55.7, 89.0], [55.8, 89.0], [55.9, 89.0], [56.0, 89.0], [56.1, 90.0], [56.2, 90.0], [56.3, 90.0], [56.4, 90.0], [56.5, 90.0], [56.6, 90.0], [56.7, 90.0], [56.8, 90.0], [56.9, 90.0], [57.0, 90.0], [57.1, 90.0], [57.2, 90.0], [57.3, 90.0], [57.4, 90.0], [57.5, 90.0], [57.6, 90.0], [57.7, 90.0], [57.8, 90.0], [57.9, 91.0], [58.0, 91.0], [58.1, 91.0], [58.2, 91.0], [58.3, 91.0], [58.4, 91.0], [58.5, 91.0], [58.6, 91.0], [58.7, 91.0], [58.8, 91.0], [58.9, 91.0], [59.0, 91.0], [59.1, 91.0], [59.2, 91.0], [59.3, 91.0], [59.4, 91.0], [59.5, 91.0], [59.6, 91.0], [59.7, 92.0], [59.8, 92.0], [59.9, 92.0], [60.0, 92.0], [60.1, 92.0], [60.2, 92.0], [60.3, 92.0], [60.4, 92.0], [60.5, 92.0], [60.6, 92.0], [60.7, 92.0], [60.8, 92.0], [60.9, 92.0], [61.0, 92.0], [61.1, 92.0], [61.2, 92.0], [61.3, 92.0], [61.4, 92.0], [61.5, 93.0], [61.6, 93.0], [61.7, 93.0], [61.8, 93.0], [61.9, 93.0], [62.0, 93.0], [62.1, 93.0], [62.2, 93.0], [62.3, 93.0], [62.4, 93.0], [62.5, 93.0], [62.6, 93.0], [62.7, 93.0], [62.8, 93.0], [62.9, 93.0], [63.0, 93.0], [63.1, 93.0], [63.2, 93.0], [63.3, 93.0], [63.4, 94.0], [63.5, 94.0], [63.6, 94.0], [63.7, 94.0], [63.8, 94.0], [63.9, 94.0], [64.0, 94.0], [64.1, 94.0], [64.2, 94.0], [64.3, 94.0], [64.4, 94.0], [64.5, 94.0], [64.6, 94.0], [64.7, 94.0], [64.8, 95.0], [64.9, 95.0], [65.0, 95.0], [65.1, 95.0], [65.2, 95.0], [65.3, 95.0], [65.4, 95.0], [65.5, 95.0], [65.6, 95.0], [65.7, 95.0], [65.8, 95.0], [65.9, 95.0], [66.0, 95.0], [66.1, 95.0], [66.2, 96.0], [66.3, 96.0], [66.4, 96.0], [66.5, 96.0], [66.6, 96.0], [66.7, 96.0], [66.8, 96.0], [66.9, 96.0], [67.0, 96.0], [67.1, 96.0], [67.2, 96.0], [67.3, 96.0], [67.4, 96.0], [67.5, 96.0], [67.6, 96.0], [67.7, 97.0], [67.8, 97.0], [67.9, 97.0], [68.0, 97.0], [68.1, 97.0], [68.2, 97.0], [68.3, 97.0], [68.4, 97.0], [68.5, 97.0], [68.6, 97.0], [68.7, 97.0], [68.8, 97.0], [68.9, 97.0], [69.0, 98.0], [69.1, 98.0], [69.2, 98.0], [69.3, 98.0], [69.4, 98.0], [69.5, 98.0], [69.6, 98.0], [69.7, 98.0], [69.8, 98.0], [69.9, 98.0], [70.0, 98.0], [70.1, 98.0], [70.2, 98.0], [70.3, 99.0], [70.4, 99.0], [70.5, 99.0], [70.6, 99.0], [70.7, 99.0], [70.8, 99.0], [70.9, 99.0], [71.0, 99.0], [71.1, 99.0], [71.2, 99.0], [71.3, 99.0], [71.4, 99.0], [71.5, 99.0], [71.6, 99.0], [71.7, 100.0], [71.8, 100.0], [71.9, 100.0], [72.0, 100.0], [72.1, 100.0], [72.2, 100.0], [72.3, 100.0], [72.4, 100.0], [72.5, 100.0], [72.6, 100.0], [72.7, 100.0], [72.8, 100.0], [72.9, 100.0], [73.0, 101.0], [73.1, 101.0], [73.2, 101.0], [73.3, 101.0], [73.4, 101.0], [73.5, 101.0], [73.6, 101.0], [73.7, 101.0], [73.8, 101.0], [73.9, 101.0], [74.0, 101.0], [74.1, 102.0], [74.2, 102.0], [74.3, 102.0], [74.4, 102.0], [74.5, 102.0], [74.6, 102.0], [74.7, 102.0], [74.8, 102.0], [74.9, 102.0], [75.0, 102.0], [75.1, 102.0], [75.2, 102.0], [75.3, 102.0], [75.4, 103.0], [75.5, 103.0], [75.6, 103.0], [75.7, 103.0], [75.8, 103.0], [75.9, 103.0], [76.0, 103.0], [76.1, 103.0], [76.2, 103.0], [76.3, 103.0], [76.4, 103.0], [76.5, 103.0], [76.6, 104.0], [76.7, 104.0], [76.8, 104.0], [76.9, 104.0], [77.0, 104.0], [77.1, 104.0], [77.2, 104.0], [77.3, 104.0], [77.4, 104.0], [77.5, 104.0], [77.6, 104.0], [77.7, 104.0], [77.8, 104.0], [77.9, 105.0], [78.0, 105.0], [78.1, 105.0], [78.2, 105.0], [78.3, 105.0], [78.4, 105.0], [78.5, 105.0], [78.6, 105.0], [78.7, 105.0], [78.8, 105.0], [78.9, 105.0], [79.0, 106.0], [79.1, 106.0], [79.2, 106.0], [79.3, 106.0], [79.4, 106.0], [79.5, 106.0], [79.6, 106.0], [79.7, 106.0], [79.8, 106.0], [79.9, 107.0], [80.0, 107.0], [80.1, 107.0], [80.2, 107.0], [80.3, 107.0], [80.4, 107.0], [80.5, 107.0], [80.6, 107.0], [80.7, 107.0], [80.8, 107.0], [80.9, 108.0], [81.0, 108.0], [81.1, 108.0], [81.2, 108.0], [81.3, 108.0], [81.4, 108.0], [81.5, 108.0], [81.6, 108.0], [81.7, 108.0], [81.8, 109.0], [81.9, 109.0], [82.0, 109.0], [82.1, 109.0], [82.2, 109.0], [82.3, 109.0], [82.4, 109.0], [82.5, 110.0], [82.6, 110.0], [82.7, 110.0], [82.8, 110.0], [82.9, 110.0], [83.0, 110.0], [83.1, 110.0], [83.2, 111.0], [83.3, 111.0], [83.4, 111.0], [83.5, 111.0], [83.6, 112.0], [83.7, 112.0], [83.8, 112.0], [83.9, 112.0], [84.0, 112.0], [84.1, 112.0], [84.2, 113.0], [84.3, 113.0], [84.4, 113.0], [84.5, 113.0], [84.6, 113.0], [84.7, 114.0], [84.8, 114.0], [84.9, 114.0], [85.0, 114.0], [85.1, 114.0], [85.2, 114.0], [85.3, 115.0], [85.4, 115.0], [85.5, 115.0], [85.6, 115.0], [85.7, 115.0], [85.8, 115.0], [85.9, 116.0], [86.0, 116.0], [86.1, 116.0], [86.2, 116.0], [86.3, 116.0], [86.4, 117.0], [86.5, 117.0], [86.6, 117.0], [86.7, 117.0], [86.8, 117.0], [86.9, 118.0], [87.0, 118.0], [87.1, 118.0], [87.2, 118.0], [87.3, 118.0], [87.4, 118.0], [87.5, 119.0], [87.6, 119.0], [87.7, 119.0], [87.8, 119.0], [87.9, 120.0], [88.0, 120.0], [88.1, 120.0], [88.2, 120.0], [88.3, 121.0], [88.4, 121.0], [88.5, 121.0], [88.6, 121.0], [88.7, 122.0], [88.8, 122.0], [88.9, 122.0], [89.0, 122.0], [89.1, 123.0], [89.2, 123.0], [89.3, 123.0], [89.4, 123.0], [89.5, 124.0], [89.6, 124.0], [89.7, 124.0], [89.8, 124.0], [89.9, 125.0], [90.0, 125.0], [90.1, 125.0], [90.2, 125.0], [90.3, 126.0], [90.4, 126.0], [90.5, 126.0], [90.6, 126.0], [90.7, 126.0], [90.8, 126.0], [90.9, 127.0], [91.0, 127.0], [91.1, 127.0], [91.2, 127.0], [91.3, 128.0], [91.4, 128.0], [91.5, 128.0], [91.6, 128.0], [91.7, 129.0], [91.8, 129.0], [91.9, 129.0], [92.0, 129.0], [92.1, 130.0], [92.2, 131.0], [92.3, 131.0], [92.4, 131.0], [92.5, 131.0], [92.6, 132.0], [92.7, 132.0], [92.8, 132.0], [92.9, 133.0], [93.0, 133.0], [93.1, 133.0], [93.2, 134.0], [93.3, 134.0], [93.4, 135.0], [93.5, 135.0], [93.6, 135.0], [93.7, 136.0], [93.8, 136.0], [93.9, 137.0], [94.0, 137.0], [94.1, 137.0], [94.2, 138.0], [94.3, 138.0], [94.4, 138.0], [94.5, 139.0], [94.6, 139.0], [94.7, 140.0], [94.8, 140.0], [94.9, 140.0], [95.0, 141.0], [95.1, 141.0], [95.2, 142.0], [95.3, 142.0], [95.4, 143.0], [95.5, 143.0], [95.6, 144.0], [95.7, 144.0], [95.8, 145.0], [95.9, 145.0], [96.0, 146.0], [96.1, 147.0], [96.2, 148.0], [96.3, 148.0], [96.4, 149.0], [96.5, 150.0], [96.6, 150.0], [96.7, 151.0], [96.8, 153.0], [96.9, 153.0], [97.0, 154.0], [97.1, 155.0], [97.2, 156.0], [97.3, 156.0], [97.4, 158.0], [97.5, 159.0], [97.6, 161.0], [97.7, 161.0], [97.8, 162.0], [97.9, 164.0], [98.0, 165.0], [98.1, 167.0], [98.2, 169.0], [98.3, 170.0], [98.4, 172.0], [98.5, 175.0], [98.6, 177.0], [98.7, 180.0], [98.8, 181.0], [98.9, 184.0], [99.0, 188.0], [99.1, 192.0], [99.2, 197.0], [99.3, 204.0], [99.4, 208.0], [99.5, 236.0], [99.6, 246.0], [99.7, 375.0], [99.8, 390.0], [99.9, 394.0], [100.0, 402.0]], "isOverall": false, "label": "POST /api/users", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 10.0, "minX": 0.0, "maxY": 21436.0, "series": [{"data": [[0.0, 21436.0], [300.0, 90.0], [100.0, 8258.0], [200.0, 122.0], [400.0, 10.0]], "isOverall": false, "label": "POST /api/users", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 29916.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 29916.0, "series": [{"data": [[0.0, 29916.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 45.78683671145526, "minX": 1.78269474E12, "maxY": 49.7974417098446, "series": [{"data": [[1.78269474E12, 45.78683671145526], [1.7826948E12, 49.7974417098446]], "isOverall": false, "label": "50 usuarios concurrentes - 30s", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7826948E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 14.319999999999999, "minX": 1.0, "maxY": 191.62068965517238, "series": [{"data": [[2.0, 95.0], [3.0, 48.3], [4.0, 14.319999999999999], [5.0, 18.766666666666666], [6.0, 22.689655172413794], [7.0, 23.225806451612904], [8.0, 26.166666666666664], [9.0, 26.823529411764707], [10.0, 29.914285714285718], [11.0, 31.999999999999996], [12.0, 40.068965517241395], [13.0, 37.22500000000001], [14.0, 35.87500000000003], [15.0, 42.03030303030302], [16.0, 44.399999999999984], [17.0, 48.625], [18.0, 56.57142857142859], [19.0, 73.50000000000004], [20.0, 50.3095238095238], [21.0, 46.769230769230774], [22.0, 61.3], [23.0, 99.5925925925926], [24.0, 62.23809523809524], [25.0, 55.9777777777778], [26.0, 64.84615384615383], [27.0, 65.93023255813955], [28.0, 56.22916666666666], [29.0, 74.97142857142856], [30.0, 121.95833333333333], [31.0, 72.71153846153845], [32.0, 64.35714285714285], [33.0, 84.4516129032258], [34.0, 164.62499999999994], [35.0, 191.62068965517238], [36.0, 141.76], [37.0, 95.97916666666666], [38.0, 82.22448979591836], [39.0, 75.83673469387755], [40.0, 96.3157894736842], [41.0, 162.07894736842107], [42.0, 88.78723404255321], [43.0, 93.21739130434783], [44.0, 96.77777777777779], [45.0, 97.68749999999999], [46.0, 93.56000000000003], [47.0, 85.89830508474577], [48.0, 91.85964912280706], [49.0, 86.37500000000001], [50.0, 94.86435426585035], [1.0, 84.0]], "isOverall": false, "label": "POST /api/users", "isController": false}, {"data": [[47.442706244150145, 92.06872576547678]], "isOverall": false, "label": "POST /api/users-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 59991.36666666667, "minX": 1.78269474E12, "maxY": 132460.8, "series": [{"data": [[1.78269474E12, 132460.8], [1.7826948E12, 93918.86666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78269474E12, 84489.23333333334], [1.7826948E12, 59991.36666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7826948E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 89.9190414507773, "minX": 1.78269474E12, "maxY": 93.5805055795952, "series": [{"data": [[1.78269474E12, 93.5805055795952], [1.7826948E12, 89.9190414507773]], "isOverall": false, "label": "POST /api/users", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7826948E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 89.91353626943021, "minX": 1.78269474E12, "maxY": 93.56319744932814, "series": [{"data": [[1.78269474E12, 93.56319744932814], [1.7826948E12, 89.91353626943021]], "isOverall": false, "label": "POST /api/users", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7826948E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.78269474E12, "maxY": 0.01628330676383519, "series": [{"data": [[1.78269474E12, 0.01628330676383519], [1.7826948E12, 0.0]], "isOverall": false, "label": "POST /api/users", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7826948E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 8.0, "minX": 1.78269474E12, "maxY": 402.0, "series": [{"data": [[1.78269474E12, 261.0], [1.7826948E12, 402.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78269474E12, 8.0], [1.7826948E12, 61.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78269474E12, 129.0], [1.7826948E12, 116.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78269474E12, 187.0], [1.7826948E12, 240.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78269474E12, 91.0], [1.7826948E12, 81.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78269474E12, 146.0], [1.7826948E12, 132.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7826948E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 19.5, "minX": 114.0, "maxY": 115.0, "series": [{"data": [[678.0, 59.0], [726.0, 62.0], [836.0, 85.0], [868.0, 96.0], [900.0, 93.0], [916.0, 90.0], [922.0, 115.0], [938.0, 106.0], [940.0, 95.0], [976.0, 101.0], [986.0, 97.0], [982.0, 84.0], [1012.0, 90.0], [1032.0, 86.0], [1078.0, 83.0], [1050.0, 88.0], [1042.0, 91.0], [1104.0, 91.0], [1120.0, 84.0], [1110.0, 88.0], [1136.0, 87.0], [1148.0, 80.5], [1098.0, 84.0], [1166.0, 82.0], [1170.0, 83.0], [1162.0, 80.0], [1222.0, 79.0], [1362.0, 73.0], [114.0, 84.0], [444.0, 19.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1362.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 19.0, "minX": 114.0, "maxY": 115.0, "series": [{"data": [[678.0, 59.0], [726.0, 62.0], [836.0, 85.0], [868.0, 96.0], [900.0, 93.0], [916.0, 90.0], [922.0, 115.0], [938.0, 106.0], [940.0, 95.0], [976.0, 101.0], [986.0, 97.0], [982.0, 84.0], [1012.0, 90.0], [1032.0, 86.0], [1078.0, 83.0], [1050.0, 88.0], [1042.0, 91.0], [1104.0, 91.0], [1120.0, 84.0], [1110.0, 88.0], [1136.0, 87.0], [1148.0, 80.5], [1098.0, 84.0], [1166.0, 82.0], [1170.0, 83.0], [1162.0, 80.0], [1222.0, 79.0], [1362.0, 73.0], [114.0, 84.0], [444.0, 19.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1362.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 204.2, "minX": 1.78269474E12, "maxY": 294.4, "series": [{"data": [[1.78269474E12, 294.4], [1.7826948E12, 204.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7826948E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 205.86666666666667, "minX": 1.78269474E12, "maxY": 292.73333333333335, "series": [{"data": [[1.78269474E12, 292.73333333333335], [1.7826948E12, 205.86666666666667]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7826948E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 205.86666666666667, "minX": 1.78269474E12, "maxY": 292.73333333333335, "series": [{"data": [[1.78269474E12, 292.73333333333335], [1.7826948E12, 205.86666666666667]], "isOverall": false, "label": "POST /api/users-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7826948E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 205.86666666666667, "minX": 1.78269474E12, "maxY": 292.73333333333335, "series": [{"data": [[1.78269474E12, 292.73333333333335], [1.7826948E12, 205.86666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7826948E12, "title": "Total Transactions Per Second"}},
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

