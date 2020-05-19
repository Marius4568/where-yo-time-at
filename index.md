<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="../yin-yan.ico" type="image/x-icon">
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="../new.css">
        <title>Where Your Time Goes</title>
    </head>
    <body data-barba="wrapper">
        <div data-barba="container" data-barba-namespace="home">
            <div class="transition-div wrapper">
                <div class="left-section">
                    <div class="top-left-box flexbox-center">
                        <h2>Calculate how much time an activity you regularly do consumes in a year  </h2>
                    </div>
                    <div class="bottom-left-box flexbox-center">
                        <p>This calculation can help you understand where your time goes,
                            or if you’re spending too much/little time doing certain activities.
                            With such understanding you can plan your time better.
                        </p>
                        <a href="./select-mob.html">
                            <div class="arrow-btn2">
                                <p>Next</p>
                                <svg width="90" height="25" viewBox="0 0 114 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M112.768 20.7678C113.744 19.7915 113.744 18.2085 112.768 17.2322L96.8579 1.32233C95.8816 0.34602 94.2986 0.34602 93.3223 1.32233C92.346 2.29864 92.346 3.88155 93.3223 4.85786L107.464 19L93.3223 33.1421C92.346 34.1184 92.346 35.7014 93.3223 36.6777C94.2986 37.654 95.8816 37.654 96.8579 36.6777L112.768 20.7678ZM-2.57844e-09 21.5L111 21.5L111 16.5L2.57844e-09 16.5L-2.57844e-09 21.5Z" fill="#E07171"/>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="right-section flexbox-center">

                    <div class="form-wrap-wrap">

                    <div class="form-wrapper">



                        <form>
                            <div class="firstq-wrap">
                                <label class="firstq-label" for="1.What's your activity?">1.What's your activity?</label> <br>
                                <input class="base-input-style firstq-text-input" type="text" id="1.What's your activity?" name="1.What's your activity?" required>
                            </div>
                            
                            <div class="secondq-wrap">
                                <label class="secondq-label" for ="2. How much time does it take to complete in one session?">2. How much time does it take to complete in one session?</label> <br>
                                <div class="time-wrap">
                                    <div class="hours-wrap">
                                        <label for="hours">hours</label>
                                        <input class="base-input-style" type="number" id="hours" name="hours">
                                    </div>
                                    <div class="minutes-wrap">
                                        <label for="minutes">minutes</label>
                                        <input class="base-input-style" type="number" id="minutes" name="minutes"> <br>
                                    </div>
                                </div>
                            </div>
                            
                                <div id="thirdq-wrap">
                                    <div class="thirdq-wrap-0 ">
                                        <label for="Select the frequency of the activity:">3. Select the frequency of the activity:</label> <br>
                                    </div>
                                    <div class="thirdq-wrap-1">
                                        <input class="base-input-style input-red option" type="number" id="tpday" name="tpday"> <label for="tpday">times per day</label> <br>
                                    </div>
                                    <div class="thirdq-wrap-2">
                                        <input class="base-input-style input-red option" type="number" id="tpweek" name="tpweek"> <label for="tpweek">times per week</label> <br>
                                    </div>
                                    <div class="thirdq-wrap-3">
                                        <input class="base-input-style input-red option" type="number" id="tpmonth" name="tpmonth" > <label for="tpmonth">times per month</label>
                                    </div>
                                </div>
                            
                        </form>
                        <div class="space-holder-for-arrow1"></div>
                        <a class="arrow-btn1" href="./result.html">
                            <div class="next-btn flexbox-center">
                                <p>See result</p>
                                <svg width="90" height="25" viewBox="0 0 114 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M112.768 20.7678C113.744 19.7915 113.744 18.2085 112.768 17.2322L96.8579 1.32233C95.8816 0.34602 94.2986 0.34602 93.3223 1.32233C92.346 2.29864 92.346 3.88155 93.3223 4.85786L107.464 19L93.3223 33.1421C92.346 34.1184 92.346 35.7014 93.3223 36.6777C94.2986 37.654 95.8816 37.654 96.8579 36.6777L112.768 20.7678ZM-2.57844e-09 21.5L111 21.5L111 16.5L2.57844e-09 16.5L-2.57844e-09 21.5Z" fill="#E07171"/>
                                </svg>
                            </div>
                        </a>



                    </div>

                </div>

                </div>
                <script src="https://unpkg.com/@barba/core"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.4/gsap.min.js"></script>
                <script type = "module" src="../js/main.js"></script>
            </div>
        </div>
    </body>
</html>
