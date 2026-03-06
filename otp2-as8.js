/*2.OTP Countdown Simulator (Console App)
------------------------------------
        
        Simulate OTP sending flow in Node.js:
        
        Show “OTP Sent Successfully”
        
        Start 10-second countdown
        
        Allow resend only after countdown ends*/
        console.log("OTP Sent Sussessfully")
        let i=10
        let interval=setInterval(()=>{
            console.log(i)
            i-=1;
        },1000)
        setTimeout(()=>{
            clearInterval(interval);
            console.log("allow resend ")
        },11000)