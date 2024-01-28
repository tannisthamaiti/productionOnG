function onChangeColor(event)
        {
            var color=event.value;
            
            var divVal="";
            if (color=="skid1")
            {
                divVal= ["div3","div4"];
            }
            else if (color=="Green")
            {
                divVal= ["div1"];
            }

            for (let i = 0; i < divVal.length; i++)
                document.getElementById(divVal[i]).className = "animate";
            //style["background-color"]=color;
        }

        function startTime() {
            const today = new Date();
            let h = today.getHours()-5;
            let m = today.getMinutes();
            let s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById('runTime').innerHTML =  "<strong>System run time :</strong>"+h + ":" + m + ":" + s;
            setTimeout(startTime, 1000);
        }
        function checkTime(i) {
            if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
                return i;
            }
            var number;

        function addFlow(totalFlow,number){
            return (totalFlow+number*100);

        }
        var totalFlow=0;
        function repeat() {
            number = Math.random().toPrecision(4);
            totalFlow=addFlow(totalFlow,number);
            setTimeout(repeat, 3000);
            document.getElementById('flowTime').innerHTML ="<strong>Total flow :&nbsp;</strong>"+totalFlow+" m<sup>3</sup>";
            };


        function showDiv() {
                document.getElementById('welcomeDiv').style.display = "block";
             }
             