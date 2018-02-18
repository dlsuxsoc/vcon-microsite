/*
    script to configure language
    calls language.json to fetch desired lang-mode
*/



$(document).ready(function () {
    /*
        var dum;
        $.get("json/dummy.json", function(data){
            dum = data;
            console.log(dum.username);
        });
        
        var val_lang = document.getElementById("chosen_lang").options[sel_lang.selectedIndex].value;
    
                if (val_lang === 0) {
                
                }
    */
        
            document.getElementById("chosen_lang").onchange = function() {
                var temp = document.getElementById("chosen_lang");
                var x = temp.options[temp.selectedIndex].value;
                
                //////////*  ENGLISH  *//////////done
                if(x === '0'){
                    document.getElementById('tagline').innerHTML = "Look no further.<br/>Keep going and change your<br/>life forever.";
                    /* document.getElementById('switch_lang').innerHTML = "BUY TICKETS";
                    document.getElementById('about_headnote').innerHTML = "ABOUT";
                    document.getElementById('history_headnote').innerHTML = "HISTORY";
                    document.getElementById('weareone_headnote').innerHTML = "WE ARE ONE";
                    document.getElementById('news_headnote').innerHTML = "NEWS & UPDATES";
                    document.getElementById('faqs_headnote').innerHTML = "FAQs";
                    document.getElementById('contact_headnote').innerHTML = "CONTACT US"; */
                    
                    /* WHO, WHAT, WHY*/
                    document.getElementById('about-title').innerHTML = "WHO, WHAT, WHY";
                    document.getElementById('about-what').innerHTML = "<b>WHAT</b> is V-Con?";
                    document.getElementById('about-what-p').innerHTML = "V-Con is an experience that is often equated with the words unbelievable, magical, and life-changing. Held in nine different countries since its conception in 2001, the V-Convention is an annual grand gathering hosted by The V, where you can expect a series of world-class motivational speeches and training sessions that are essential for professional networkers. State-of-the-art exhibitions are also set up for those who wish to get exclusive merchandise, know more about products, and avail of special promos.";
                    document.getElementById('about-who').innerHTML = "<b>WHO</b> goes to V-Con?";
                    document.getElementById('about-who-p').innerHTML = "It is open to all IRs of QNET who wish to gain a better sense of their network marketing journey. To date, V-Con has gathered thousands of attendees from different parts of world, with record-breaking numbers to boot.";
                    document.getElementById('about-why').innerHTML = "<b>WHY</b> do you need to be at V-Con?";
                    document.getElementById('about-why-p').innerHTML = "As a partner who will be with you throughout your network marketing journey, The V aims to maximize this 5-day convention to help you claim your ultimate goal of gaining financial freedom. Whether you just signed up or have been in the business for several years, you have no better decision but to come home to V-Con and realize your limitless potential for greatness.";
    
    
                    /* HISTORY **/
                    document.getElementById('history-title').innerHTML = "V-CON THROUGH HISTORY";
                    document.getElementById('history-tagline').innerHTML = "Before our 26th V-Con this coming 24 to 28 April 2018 at SPICE Arena in Penang Malaysia, here's where we've been changing lives since 2001";
                    
                    document.getElementById('vcon-2001-title').innerHTML = "2001: V-Con Bali 2001";
                    document.getElementById('vcon-2001-par').innerHTML = "We saw the birth of the V's biggest and most anticipated event: The V-Convention, or V-Con. From less than a hundred participants in the initial event in <b>Bali, Indonesia,</b> today's V-Cons are attended by more than fifteen thousand participants representing as much as 80 countries around the world.";
                    document.getElementById('vcon-2002-title').innerHTML = "2002: V-Con Goa 2002";
                    document.getElementById('vcon-2002-par').innerHTML = "With 500 participants from different parts of the world, the 2002 V-Con in India showcased the theme 'The Essence of Leadership'. With the attention it drew, V-Con Goa was held twice to accommodate all the participants who wanted to take part in such an amazing experience.";
                    document.getElementById('vcon-2003-title').innerHTML = "2003: V-Con Kota Kinabalu 2003";
                    document.getElementById('vcon-2003-par').innerHTML = "In 2003, V-Con made its way to Kota Kinabalu, Sabah, Malaysia, where it gathered over 500 participants from 26 different countries. It paraded with the theme, 'The Essence of Success.'";
                    document.getElementById('vcon-2004-title').innerHTML = "2004: V-Dubai 2004 and Euro V-Con 2004";
                    document.getElementById('vcon-2004-par').innerHTML = "V-Dubai in 2004 marked the 6th anniversary of the company, where over 700 participants attended. </br></br>On the same year, The V held its first <b>V-Con in Europe at the Rodos Palace Hotel in the island of Rhodes, Greece</b>. From June 6 to 9 2004, 200 participants gathered to open a new network in Europe.";
                    document.getElementById('vcon-2005-title').innerHTML = "2005: V-Thailand 2005";
                    document.getElementById('vcon-2005-par').innerHTML = "V-Thailand 2005 featured activities that highlighted our passion for developing world-class leadership and excellence.</br></br>Since The V believed in starting them young, a special event catering to our leaders' young children kicked off at V-Thailand. The event now known as V-Kids started with a small group of children handled by spouses of our V-Partners and other V-Ambassadors.";
                    document.getElementById('vcon-2006-title').innerHTML = "2006: V-Malaysia 2006 and Euro V-Con Madrid 2006";
                    document.getElementById('vcon-2006-par').innerHTML = "Marked as the 7th V-Convention, V-Malaysia 2006 was held at Sunway Pyramid Convention Center and bore the theme, 'Over The Top'.</br></br>Two years after their first European V-Con, The V also embarked in an intensive expansion program designed especially for the European market on the same year. Euro-VCon Madrid also served to celebrate two other milestones in the company's history: (1) the 8th anniversary of the founding of the Qi Group of Companies; and (2) Qi's title sponsorship of the 2006 International Badminton Federation (IBF) World Championships—which served as a firm statement of the company's credibility, prestige and stability.";
                    document.getElementById('vcon-2007-title').innerHTML = "2007: V-Jakarta 2007 and V-Africa 2007";
                    document.getElementById('vcon-2007-par').innerHTML = "With over 3,000 participants from 40 different countries, V-Jakarta 2007 was held at the Jakarta Convention Center, where The V strengthened its passion for the network’s success. </br></br>In the same year, The V brought its much talked about event to Kenya and successfully held V-Africa 2007, gathering over 2,000 participants.";
                    document.getElementById('vcon-2008-title').innerHTML = "2008: V-Malaysia 2008 and V-Africa 2008";
                    document.getElementById('vcon-2008-par').innerHTML = "The company celebrated its 10th anniversary. One of the highlights of V-Con held at the Penang International Sports Arena from the 21st to 25th of May in 2008 was the V-Kids Convention where over 124 children of different ages and nationalities were treated to three days of fun and learning. Aside from the V-Kids Convention, other highlights of the convention included the spectacular Gala and Welcome Night and an exhibit that showcased the whole gamut of products and services from The V and its sister companies.</br></br>Uganda in East Africa, Kampala also became the talk of the town as V-Africa was held in the same year, with 1,600 participants.";
                    document.getElementById('vcon-2009-title').innerHTML = "2009: V-Malaysia 2009";
                    document.getElementById('vcon-2009-par').innerHTML = "Held in Shah Alam, Malaysia, this V-Con carried the theme 'Change Begins.'";
                    document.getElementById('vcon-2010-title').innerHTML = "2010: V-Malaysia 2010";
                    document.getElementById('vcon-2010-par').innerHTML = "Motivational speaker born with tetra-amelia syndrome, Nick Vujicic spoke at V-Malaysia 2010.";
                    document.getElementById('vcon-2011-title').innerHTML = "2011: V-Malaysia 2011";
                    document.getElementById('vcon-2011-par').innerHTML = "In 2011, V-Con heralded with the theme, 'Belief.'";
                    document.getElementById('vcon-2012-title').innerHTML = "2012: V-Indonesia 2012";
                    document.getElementById('vcon-2012-par').innerHTML = "V-Con once again found a home in Jakarta, Indonesia for V-Indonesia 2012, where it had 'Make A Difference' as compelling theme.";
                    document.getElementById('vcon-2013-title').innerHTML = "2013: V-Malaysia 2013";
                    document.getElementById('vcon-2013-par').innerHTML = "Dreamers from all parts of the globe gathered once again in Malaysia in 2013 for V-Malaysia 2013, which headlined as 'RYTHM Nation.'";
                    document.getElementById('vcon-2014-title').innerHTML = "2014: V-Malaysia 2014";
                    document.getElementById('vcon-2014-par').innerHTML = "This year, V-Con took on a theme that called upon dreamers to 'Arise. Awake. Achieve.' It was also the very first V-Con that proudly introduced QNET's place in the world of football after signing with Manchester City Football Club as its exclusive direct selling partner.";
                    document.getElementById('vcon-2015-title').innerHTML = "2015: V-Malaysia 2015 and V-UAE 2015";
                    document.getElementById('vcon-2015-par').innerHTML = "As a pivotal year for the network and the company, the 2015 V-Con took on 'Game Changer' as theme. It was also the advent of The V's continuing streak in holding two V-Conventions every year, with the first in Penang, Malaysia, and the second one in Dubai, UAE.";
                    document.getElementById('vcon-2016-title').innerHTML = "2016: V-Malaysia 2016 and V-UAE 2016";
                    document.getElementById('vcon-2016-par').innerHTML = "A record breaking number of delegates attended V-Malaysia in Penang. The arena was filled to the rafters with over fifteen thousand participants, echoing the theme 'Evolve. Empower. Enrich.'</br></br>Anil Kapoor, an Indian actor and producer who has appeared in countless Bollywood and international films; Jackie Shroff who has been in the Hindi cinema for almost four decades and has appeared in 207 films in nine languages; and Vivek Oberoi who made his Hindi film debut went up on the V-UAE stage in 2016 to share how they took the big leap to be where they are today.";
                    document.getElementById('vcon-2017-title').innerHTML = "2017: V-Malaysia 2017 and V-UAE 2017";
                    document.getElementById('vcon-2017-par').innerHTML = "For the 3rd straight year, V-Con was held in both Penang, Malaysia and Dubai, UAE, with both record-breaking attendance. A rousing 'DO IT NOW' theme headlined the two V-Conventions. Muniba Mazari, an inspirational woman whose life story drew much love and admiration from thousands of dreamers at V-Malaysia and V-UAE, added to a growing list of superstars that joined our family to be part of an unbelievable V-Con experience.";
                    
    
                    /* Call-to-Action */
                    document.getElementById('cta-title').innerHTML = "WE ARE ONE";
                    document.getElementById('cta-par').innerHTML = "Get to know the family. Enter our home. Follow the calling. If you must make one great decision today, let this be THE ONE. Book your V-Malaysia 2018 tickets here!";
    
    
                    /* ROOM RESERVATION */
                    document.getElementById('room-reservation-title').innerHTML = "COMPLETE YOUR V-MALAYSIA 2018 JOURNEY";
                    document.getElementById('room-reservation-par').innerHTML = "Looking for hotel reservations and transportation transfers in Penang, Malaysia from 24 to 28 April for you and your team? Apollo got you covered!";
                    document.getElementById('btn-apollo').innerHTML = "SEARCH APOLLO NOW";
    
                    /* NEWS AND UPDATES */
                    document.getElementById('news-and-updates-title').innerHTML = "NEWS & UPDATES";
                    document.getElementById('news-and-updates-par').innerHTML = "READ | WATCH | VIEW";
    
    
                    /* INSTAGRAM POSTS */
                    document.getElementById('ig-dock-title').innerHTML = "THE #VCON18 MAGIC TAKING OVER THE WORLD";
    
                    
                    /* FAQ **/
                    document.getElementById('faqs-title').innerHTML = "FREQUENTLY ASKED QUESTIONS";
                    
                    document.getElementById('faq-tab-one').innerHTML = "How do I purchase a ticket?";
                    document.getElementById('faq-tab-one-par').innerHTML = "Click to buy your V-Malaysia 2018 ticket.";
                    document.getElementById('faq-tab-two').innerHTML = "What are the available payment terms?";
                    document.getElementById('faq-tab-two-par').innerHTML = "Currently, you can pay with cash or credit card (Visa and MasterCard).";
                    document.getElementById('faq-tab-three').innerHTML = "What to bring?";
                    document.getElementById('faq-tab-three-par').innerHTML = "Going to V-Con? Here are 5 important things you need to bring:";
                    document.getElementById('faq-tab-three-par-sub-one').innerHTML = "During registration, bring one (1) valid ID and copy of the confirmation letter that will be sent to you via email right after the purchase of your ticket.";
                    document.getElementById('faq-tab-three-par-sub-two').innerHTML = "Enough pocket money to last for 5 days, which you may spend on food, drinks, transportation, V-Con merchandise, souvenirs, etc. Make sure to have your money either in USD or MYR. ";
                    document.getElementById('faq-tab-three-par-sub-three').innerHTML = "Clothes good for 5 days. Make sure to bring extra shirts or towels as it is extra warm in Penang, Malaysia around this time.";
                    document.getElementById('faq-tab-three-par-sub-four').innerHTML = "Take a camera with you to make your precious V-Con memories last, and have something you can show to your family and future prospects when you go back home.";
                    document.getElementById('faq-tab-three-par-sub-five').innerHTML = "As you want to savour every valuable session on stage, make sure to bring your own pen and notebook for some serious note-taking!";
                    document.getElementById('faq-tab-four').innerHTML = "Will there be tickets for sale on the day of the event itself?";
                    document.getElementById('faq-tab-four-par').innerHTML = "Yes. Only transactions made thru cash and credit card will be accommodated.";
                    document.getElementById('faq-tab-five').innerHTML = "Will there be single-day event tickets available?";
                    document.getElementById('faq-tab-five').innerHTML = "No. The 5-day program we prepared for you is something that should be attended from Day 1 to 5 for a complete life-changing experience. It is a comprehensive, holistic event with an action-packed line-up of activities that are highly essential for your business.";
    
    
                    /* CONTACT US */
                    document.getElementById('contact-us-title').innerHTML = "CONTACT US";
                    document.getElementById('contact-us-par-one').innerHTML = "If you are having trouble accessing our website, or you have further questions which are not available in our FAQ page, please get in touch with us through our following email addresses.<br/><br/><b>Technical Support</b>: vbox@the-v.net <br/><b>Content and Translation Concerns</b>: vcomm@the-v.net";
                    document.getElementById('contact-us-par-two').innerHTML = "<b>For inquiries:</b><br/>Mr. Vijiyar Thevan <br/>vijiyar.thevan@the-v.net <br/>+601 2209 3793 <br/><br/>Ms. Kauri Subramaniam <br/>kauri.s@the-v.net <br/>+603 7965 8299";
    
                    
                    /* FOLLOW US */
                    document.getElementById('follow-us-title').innerHTML = "FOLLOW US!";
                    document.getElementById('follow-us-par').innerHTML = "LIKE. TAG. SHARE.";
                }/*END OF IF*/
                          
                //////////*  ARABIC  *//////////
                if(x === '1'){
                    document.getElementById('tagline').innerHTML = "لا تبحث أكثر من ذلك.<br/>استمر في التقدم، وغيّر حياتك إلى الأبد.";
                    /* document.getElementById('buy_ticket_btn').innerHTML = "اشتر تذكرة"; */
                    
                    /* WHO, WHAT, WHY*/
                    document.getElementById('about-title').innerHTML = "من، ماذا، لماذا";
                    document.getElementById('about-what').innerHTML = "ما هو الـ V-Con؟";
                    document.getElementById('about-what-p').innerHTML = "الـ V-Con هو تجربة تتساوى مع كلمات من أمثال لا يصدق، ساحر، ومغيّر للحياة. منذ تدشينه في العام 2001 انعقد في تسعة دول مختلفة، إن الـ V- Convention هو تجمع سنوي هائل يستضيفه The V حيث يمكنك أن تتوقع سلسلة من الأحاديث التحفيزية من الطراز العالمي وجلسات التدريب التي تعتبر أساسية للمسوقين الشبكيين المحترفين. أيضاً يتم إعداد أحدث المعارض لأولئك الراغبين في الحصول على معروضات حصرية، ومعرفة المزيد عن المنتجات والاستفادة من العروض الترويجية الخاصة.";
                    document.getElementById('about-who').innerHTML = "من يذهب إلى الـ V-Con؟";
                    document.getElementById('about-who-p').innerHTML = "إنه مفتوح لكل وكلاء QNET المستقلين الذين يرغبون في اكتساب فهم أفضل حول رحلتهم في التسويق الشبكي. حتى تاريخ اليوم، جمع الـ  V-Conالآلاف من المشاركين من مختلف أجزاء العالم، محطمً أرقاماً قياسية من الأساس.";
                    document.getElementById('about-why').innerHTML = "لماذا أنت بحاجة إلى التواجد في الـ V-Con؟";
                    document.getElementById('about-why-p').innerHTML = "بصفته شريكاً سيصحبك خلال رحلتك في التسويق الشبكي، يهدف The V إلى تحقيق أقصى استفادة من هذا المؤتمر الذي يمتد خمسة أيام لمساعدتك على المطالبة بهدفك النهائي المتمثل في تحقيق الحرية المالية. فسواء كنت قد انضممت للتو أو ظللت في العمل لعدة أعوام، لن تتخذ قراراً أفضل من العودة للديار إلى الـ V-Con وإدراك إمكانياتك للعظمة التي بلا حدود داخلك.";
    
    
                    /* HISTORY */
                    document.getElementById('history-title').innerHTML = "الـ V-CON عبر التاريخ";
                    document.getElementById('history-tagline').innerHTML = "قبل الـ V-Con رقم 26 في إبريل المقبل في الفترة من 24 إلى 28، ،2018 في ساحة SPICE في بينانج، بماليزيا، إليكم مراحل تغييرنا لحياة الناس منذ العام 2001.";
    
    
                    document.getElementById('vcon-2001-title').innerHTML = "عام 2001: V-Con Bali 2001";
                    document.getElementById('vcon-2001-par').innerHTML = "شاهدنا مولد أكبر حدث في The V وأكثرها انتظاراً: وهو الـ V-Convention أو الـ V-Con. بدءاً بأقل من مائة مشارك في أول حدث في بالي، بإندونيسيا، اليوم يحضر الـ V-Cons أكثر من خمسة عشر ألف مشارك ممثلين لأكثر من 80 دولة من حول العالم. 
                    ";
                    document.getElementById('vcon-2002-title').innerHTML = "عام 2002: V-Con Goa 2002";
                    document.getElementById('vcon-2002-par').innerHTML = "بمشاركة 500 شخص من مختلف أجزاء العالم، قدم V-Con عام 2002 بالهند شعار 'The Essence of Leadership' (جوهر القيادة). مع الاهتمام الذي أثاره، انعقد V-Con Goa، مرتين ليستضيف كل المشاركين الذين أرادوا أن يكونوا جزءا من تجربة مذهلة كهذه.";
                    document.getElementById('vcon-2003-title').innerHTML = "عام 2003: V-Con Kota Kinabalu 2003";
                    document.getElementById('vcon-2003-par').innerHTML = "في عام 2003، اتجه الـ V-Con إلى مدينة كوتا كانيبالو، في ولاية صباح، بماليزيا، حيث جمع أكثر من 500 مشارك من 26 دولة مختلفة. وقد حمل شعار 'The Essence of Success' (جوهر النجاح).";
                    document.getElementById('vcon-2004-title').innerHTML = "عام 2004: V-Dubai 2004 وEuro V-Con 2004";
                    document.getElementById('vcon-2004-par').innerHTML = "شهد V-Dubai في 2004 الذكرى السادسة لتأسيس الشركة، حيث حضر أكثر من 700 مشارك.في نفس العام عقد The V أول V-Con له في أوربا في فندق Rodos Palace في جزيرة رودس في اليونان. في الفترة من 6 إلى 9 يونيو، 2004، تجمع 200 مشارك لافتتاح شبكة جديدة في أوربا.
                    ";
                    document.getElementById('vcon-2005-title').innerHTML = "عام 2005: V-Thailand 2005";
                    document.getElementById('vcon-2005-par').innerHTML = "V-Thailand 2005 قدم نشطة أبرزت شغفنا بتطوير قيادة عالمية الطراز بامتياز. ولما كان The V يؤمن بالبدء معهم وهم صغار، تم تدشين فعالية خاصة للاهتمام بأطفال قادتنا في V-Thailand. الفعالية التي تعرف الآن بـ V-Kids بدأت الفعالية بمجموعة صغيرة من الأطفال يتم الاعتناء بها من قبل زوجات V Partners وV Ambassadors الآخرين.
                    ";
                    document.getElementById('vcon-2006-title').innerHTML = "عام 2006: V-Malaysia 2006 وEuro V-Con Madrid 2006";
                    document.getElementById('vcon-2006-par').innerHTML = "";
                    document.getElementById('vcon-2007-title').innerHTML = "عام 2007: V-Jakarta 2007 وV-Africa 2007";
                    document.getElementById('vcon-2007-par').innerHTML = "";
                    document.getElementById('vcon-2008-title').innerHTML = "عام 2008: V-Malaysia 2008 وV-Africa 2008";
                    document.getElementById('vcon-2008-par').innerHTML = "";
                    document.getElementById('vcon-2009-title').innerHTML = "عام 2009: V-Malaysia 2009";
                    document.getElementById('vcon-2009-par').innerHTML = "";
                    document.getElementById('vcon-2010-title').innerHTML = "عام 2010: V-Malaysia 2010";
                    document.getElementById('vcon-2010-par').innerHTML = "";
                    document.getElementById('vcon-2011-title').innerHTML = "عام 2011: V-Malaysia 2011";
                    document.getElementById('vcon-2011-par').innerHTML = "";
                    document.getElementById('vcon-2012-title').innerHTML = "عام 2012: V-Indonesia 2012";
                    document.getElementById('vcon-2012-par').innerHTML = "";
                    document.getElementById('vcon-2013-title').innerHTML = "عام 2013: V-Malaysia 2013";
                    document.getElementById('vcon-2013-par').innerHTML = "";
                    document.getElementById('vcon-2014-title').innerHTML = "عام 2014: V-Malaysia 2014";
                    document.getElementById('vcon-2014-par').innerHTML = "";
                    document.getElementById('vcon-2015-title').innerHTML = "عام 2015:  V-Malaysia 2015 وV-UAE 2015";
                    document.getElementById('vcon-2015-par').innerHTML = "";
                    document.getElementById('vcon-2016-title').innerHTML = "عام 2016: V-Malaysia 2016 وV-UAE 2016";
                    document.getElementById('vcon-2016-par').innerHTML = "";
                    document.getElementById('vcon-2017-title').innerHTML = "عام 2017: V-Malaysia 2017 وV-UAE 2017";
                    document.getElementById('vcon-2017-par').innerHTML = "";
                    
                    
                    
                    /* Call-to-Action */
                    document.getElementById('cta-title').innerHTML = "جميعنا واحد";
                    document.getElementById('cta-par').innerHTML = "تعرّف على العائلة، ادخل إلى دارنا. أتبع النداء.";
    
    
                    /* ROOM RESERVATION */
    
                    document.getElementById('room-reservation-title').innerHTML = "أكمل رحلتك في V-MALAYSIA 2018";
                    document.getElementById('room-reservation-par').innerHTML = "تبحث عن حجز فندق وترحيلات نقل في بينانج، ماليزيا في الفترة من 24 إلى 28 أبريل لك ولفريقك؟ أبولو تغطي احتياجك!";
                    document.getElementById('btn-apollo').innerHTML = "ابحث في أبولو الآن";
                    
                    
                    
    
    
                    /* NEWS AND UPDATES */
                    document.getElementById('news-and-updates-title').innerHTML = "أخبار ومستجدات";
                    document.getElementById('news-and-updates-par').innerHTML = "اقرأ | شاهد | اطلع";
    
                    /* INSTAGRAM POSTS */
                    document.getElementById('ig-dock-title').innerHTML = "سحر #VCON18 يستولي على العالم";
    
                    /* FAQ */
                    document.getElementById('faqs-title').innerHTML = "أسئلة متكررة";
                    document.getElementById('faq-tab-one').innerHTML = "كيف أشتري تذكرة؟";
                    document.getElementById('faq-tab-two').innerHTML = "ما هي طرق الدفع المتاحة؟ ";
                    document.getElementById('faq-tab-three').innerHTML = "ماذا أحضر معي؟";
                    document.getElementById('faq-tab-four').innerHTML = "هل ستكون هناك تذاكر للبيع في يوم الحدث نفسه؟";
                    document.getElementById('faq-tab-five').innerHTML = "هل سيكون هناك تذاكر متاحة لفعالية يوم واحد؟";
    
    
                    /* CONTACT US */
                    document.getElementById('contact-us-title').innerHTML = "اتصل بنا";
                    document.getElementById('contact-us-par-one').innerHTML = "إن كنت تواجه مشكلة في الدخول على صفحتنا الإلكترونية، أو لديك مزيد من الأسئلة غير المتاحة في صفحتنا للأسئلة المتكررة، نرجو أن تتواصل معنا عبر عنوان البريد الإلكتروني التالي:<br/><br/><b>الدعم الفني</b>: vbox@the-v.net <br/><b>ما يتعلق بالمحتوى والترجمة</b>: vcomm@the-v.net";
                    document.getElementById('contact-us-par-two').innerHTML = "<b>للاستفسارات:</b><br/>Mr. Vijiyar Thevan <br/>vijiyar.thevan@the-v.net <br/>+601 2209 3793 <br/><br/>Ms. Kauri Subramaniam <br/>kauri.s@the-v.net <br/>+603 7965 8299";
    
                    /* FOLLOW US */
                    document.getElementById('follow-us-title').innerHTML = "تابعونا!";
                    document.getElementById('follow-us-par').innerHTML = "إعجاب. أوسم. شارك.";
                }/*END OF IF*/
                
                //////////*  TURKISH  *//////////
                if(x === '2'){
                    document.getElementById('tagline').innerHTML = "Look no further.<br/>Keep going and change your<br/>life forever.";
    
                    /* WHO, WHAT, WHY*/
                    document.getElementById('about-title').innerHTML = "WHO, WHAT, WHY";
                    document.getElementById('about-what').innerHTML = "<b>WHAT</b> is V-Con?";
                    document.getElementById('about-what-p').innerHTML = "V-Con is an experience that is often equated with the words unbelievable, magical, and life-changing. Held in nine different countries since its conception in 2001, the V-Convention is an annual grand gathering hosted by The V, where you can expect a series of world-class motivational speeches and training sessions that are essential for professional networkers. State-of-the-art exhibitions are also set up for those who wish to get exclusive merchandise, know more about products, and avail of special promos.";
                    document.getElementById('about-who').innerHTML = "WHO</b> goes to V-Con?";
                    document.getElementById('about-who-p').innerHTML = "It is open to all IRs of QNET who wish to gain a better sense of their network marketing journey. To date, V-Con has gathered thousands of attendees from different parts of world, with record-breaking numbers to boot.";
                    document.getElementById('about-why').innerHTML = "<b>WHY</b> do you need to be at V-Con?";
                    document.getElementById('about-why-p').innerHTML = "As a partner who will be with you throughout your network marketing journey, The V aims to maximize this 5-day convention to help you claim your ultimate goal of gaining financial freedom. Whether you just signed up or have been in the business for several years, you have no better decision but to come home to V-Con and realize your limitless potential for greatness.";
    
    
                    /* HISTORY **/
                    document.getElementById('history-title').innerHTML = "V-CON THROUGH HISTORY";
                    document.getElementById('history-tagline').innerHTML = "Before our 26th V-Con this coming 24 to 28 April 2018 at SPICE Arena in Penang Malaysia, here's where we've been changing lives since 2001";
                    
                    document.getElementById('vcon-2001-title').innerHTML = "";
                    document.getElementById('vcon-2001-par').innerHTML = "";
                    document.getElementById('vcon-2002-title').innerHTML = "";
                    document.getElementById('vcon-2002-par').innerHTML = "";
                    document.getElementById('vcon-2003-title').innerHTML = "";
                    document.getElementById('vcon-2003-par').innerHTML = "";
                    document.getElementById('vcon-2004-title').innerHTML = "";
                    document.getElementById('vcon-2004-par').innerHTML = "";
                    document.getElementById('vcon-2005-title').innerHTML = "";
                    document.getElementById('vcon-2005-par').innerHTML = "";
                    document.getElementById('vcon-2006-title').innerHTML = "";
                    document.getElementById('vcon-2006-par').innerHTML = "";
                    document.getElementById('vcon-2007-title').innerHTML = "";
                    document.getElementById('vcon-2007-par').innerHTML = "";
                    document.getElementById('vcon-2008-title').innerHTML = "";
                    document.getElementById('vcon-2008-par').innerHTML = "";
                    document.getElementById('vcon-2009-title').innerHTML = "";
                    document.getElementById('vcon-2009-par').innerHTML = "";
                    document.getElementById('vcon-2010-title').innerHTML = "";
                    document.getElementById('vcon-2010-par').innerHTML = "";
                    document.getElementById('vcon-2011-title').innerHTML = "";
                    document.getElementById('vcon-2011-par').innerHTML = "";
                    document.getElementById('vcon-2012-title').innerHTML = "";
                    document.getElementById('vcon-2012-par').innerHTML = "";
                    document.getElementById('vcon-2013-title').innerHTML = "";
                    document.getElementById('vcon-2013-par').innerHTML = "";
                    document.getElementById('vcon-2014-title').innerHTML = "";
                    document.getElementById('vcon-2014-par').innerHTML = "";
                    document.getElementById('vcon-2015-title').innerHTML = "";
                    document.getElementById('vcon-2015-par').innerHTML = "";
                    document.getElementById('vcon-2016-title').innerHTML = "";
                    document.getElementById('vcon-2016-par').innerHTML = "";
                    document.getElementById('vcon-2017-title').innerHTML = "";
                    document.getElementById('vcon-2017-par').innerHTML = "";
                    
    
                    /* Call-to-Action */
                    document.getElementById('cta-title').innerHTML = "WE ARE ONE";
                    document.getElementById('cta-par').innerHTML = "Get to know the family. Enter our home. Follow the calling. If you must make one great decision today, let this be THE ONE. Book your V-Malaysia 2018 tickets here!";
    
    
                    /* ROOM RESERVATION */
    
                    document.getElementById('room-reservation-title').innerHTML = "COMPLETE YOUR V-MALAYSIA 2018 JOURNEY";
                    document.getElementById('room-reservation-par').innerHTML = "Looking for hotel reservations and transportation transfers in Penang, Malaysia from 24 to 28 April for you and your team? Apollo got you covered!";
                    document.getElementById('btn-apollo').innerHTML = "SEARCH APOLLO NOW";
    
                    /* NEWS AND UPDATES */
                    document.getElementById('news-and-updates-title').innerHTML = "NEWS & UPDATES";
                    document.getElementById('news-and-updates-par').innerHTML = "READ | WATCH | VIEW";
    
    
                    /* INSTAGRAM POSTS */
                    document.getElementById('ig-dock-title').innerHTML = "THE #VCON18 MAGIC TAKING OVER THE WORLD";
    
                    /* FAQ **/
                    document.getElementById('faqs-title').innerHTML = "FREQUENTLY ASKED QUESTIONS";
                    document.getElementById('faq-tab-one').innerHTML = "How do I purchase a ticket?";
                    document.getElementById('faq-tab-two').innerHTML = "What are the available payment terms?";
                    document.getElementById('faq-tab-three').innerHTML = "What to bring?";
                    document.getElementById('faq-tab-four').innerHTML = "Will there be tickets for sale on the day of the event itself?";
                    document.getElementById('faq-tab-five').innerHTML = "Will there be single-day event tickets available?";
    
    
                    /* CONTACT US */
                    document.getElementById('contact-us-title').innerHTML = "CONTACT US";
                    document.getElementById('contact-us-par-one').innerHTML = "If you are having trouble accessing our website, or you have further questions which are not available in our FAQ page, please get in touch with us through our following email addresses.<br/><br/><b>Technical Support</b>: vbox@the-v.net <br/><b>Content and Translation Concerns</b>: vcomm@the-v.net";
                    document.getElementById('contact-us-par-two').innerHTML = "<b>For inquiries:</b><br/>Mr. Vijiyar Thevan <br/>vijiyar.thevan@the-v.net <br/>+601 2209 3793 <br/><br/>Ms. Kauri Subramaniam <br/>kauri.s@the-v.net <br/>+603 7965 8299";
    
                    /* FOLLOW US */
                    document.getElementById('follow-us-title').innerHTML = "FOLLOW US!";
                    document.getElementById('follow-us-par').innerHTML = "LIKE. TAG. SHARE.";
                }/*END OF IF*/
                
                //////////*  FRENCH  *//////////done
                if(x === '3'){
                    document.getElementById('tagline').innerHTML = "Ne cherchez pas plus loin.<br/>Continuez et changez votre vie <br/>pour toujours.";
                    /* document.getElementById('buy_ticket_btn').innerHTML = "ACHETER UN BILLET";
                    document.getElementById('about_headnote').innerHTML = "ABOUT";
                    document.getElementById('history_headnote').innerHTML = "HISTORY";
                    document.getElementById('weareone_headnote').innerHTML = "NOUS SOMMES UN";
                    document.getElementById('news_headnote').innerHTML = "ACTUALITÉS ET MISES À JOUR";
                    document.getElementById('faqs_headnote').innerHTML = "FAQs";
                    document.getElementById('contact_headnote').innerHTML = "NOUS CONTACTER"; */
                    
                    
                    /* WHO, WHAT, WHY*/
                    document.getElementById('about-title').innerHTML = "QUI, QUOI, POURQUOI";
                    document.getElementById('about-what').innerHTML = "C’est QUOI le V-Con?";
                    document.getElementById('about-what-p').innerHTML = "Le V-Con est une expérience qui est souvent assimilée à des mots incroyables, magiques et qui changent la vie. Tenu dans neuf pays depuis sa conception en 2001, le V-Convention est un grand rassemblement annuel organisé par The V, où vous pouvez vous attendre à une série de discours de motivation et de séances de formations de classe mondiale essentiels pour les networkers professionnels. Des expositions ultramodernes sont également organisées pour ceux qui souhaitent obtenir des produits exclusifs, apprenez plus sur les produits et profitez des promos spéciales.";
                    document.getElementById('about-who').innerHTML = "QUI va au V-Con?";
                    document.getElementById('about-who-p').innerHTML = "Il est ouvert à tous les IR de QNET qui souhaitent mieux comprendre leur voyage du marketing de réseau. À ce jour, le V-Con a rassemblé des milliers de participants de différentes parties du monde, avec un nombre record en plus.";
                    document.getElementById('about-why').innerHTML = "POURQUOI devez-vous être au V-Con?";
                    document.getElementById('about-why-p').innerHTML = "En tant que partenaire qui sera avec vous tout au long de votre voyage du marketing de réseau, The V vise à maximiser cette convention de 5 jours pour vous aider à réclamer votre but ultime d’obtention de la liberté financière. Que vous veniez de vous inscrire ou que vous soyez dans l'entreprise depuis plusieurs années, vous n'avez pas de meilleure décision que de revenir chez vous au V-Con et de réaliser votre grand potentiel sans limites.";
    
    
                    /* HISTORY */
                    document.getElementById('history-title').innerHTML = "LE V-CON DANS L'HISTOIRE";
                    document.getElementById('history-tagline').innerHTML = "Avant notre 26ème V-Con qui aura lieu du 24 au 28 avril 2018 au SPICE Arena de Penang, en Malaisie, voici où nous changeons des vies depuis 2001";
                    
                    document.getElementById('vcon-2001-title').innerHTML = "2001: V-Con Bali 2001";
                    document.getElementById('vcon-2001-par').innerHTML = "Nous avons vu la naissance de l'événement le plus important et le plus attendu de The V : le V-Convention, ou V-Con. De moins d'une centaine de participants au premier événement à Bali, en Indonésie, les V-Cons d'aujourd'hui sont suivis par plus de quinze mille participants représentant jusqu'à 80 pays à travers le monde.";
                    document.getElementById('vcon-2002-title').innerHTML = "2002: V-Con Goa 2002";
                    document.getElementById('vcon-2002-par').innerHTML = "Avec 500 participants de différentes parties du monde, le V-Con 2002 en Inde a présenté le thème 'The Essence of Leadership' (L'Essence du Leadership). Avec l'attention qu'il a attiré, le V-Con Goa s’est tenu deux fois pour accueillir tous les participants qui voulaient participer à une expérience incroyable.";
                    document.getElementById('vcon-2003-title').innerHTML = "2003: V-Con Kota Kinabalu 2003";
                    document.getElementById('vcon-2003-par').innerHTML = "En 2003, le V-Con s'est rendu à Kota Kinabalu, à Sabah, en Malaisie, où il a rassemblé plus de 500 participants de 26 pays différents. Il a présenté le thème, 'The Essence of Success' (L’essence du succès).";
                    document.getElementById('vcon-2004-title').innerHTML = "2004: V-Dubai 2004 et Euro V-Con 2004";
                    document.getElementById('vcon-2004-par').innerHTML = "V-Dubai en 2004 a marqué le 6ème anniversaire de l’entreprise, où plus de 700 participants étaient présents. </br></br>La même année, The V a tenu son premier V-Con en Europe à Rodos Palace Hotel sur l'île de Rhodes, en Grèce. Du 6 au 9 juin 2004, 200 participants se sont réunis pour ouvrir un nouveau réseau en Europe.";
                    document.getElementById('vcon-2005-title').innerHTML = "2005: V-Thailand 2005";
                    document.getElementById('vcon-2005-par').innerHTML = "V-Thailand 2005 a présenté des activités qui ont fait ressortir notre passion pour le développement du leadership et de l’excellence de classe mondiale.</br></br>Depuis que The V a cru au fait de les faire commencer depuis leur jeunesse, un événement spécial pour les enfants de nos jeunes leaders a débuté au V-Thailand. L'événement maintenant connu sous le nom de V-Kids a commencé avec un petit groupe d'enfants pris en charge par les conjoints de nos V Partners et autres V Ambassadors. ";
                    document.getElementById('vcon-2006-title').innerHTML = "2006: V-Malaysia 2006 et Euro V-Con Madrid 2006";
                    document.getElementById('vcon-2006-par').innerHTML = "Marqué comme le 7ème V-Convention, le V-Malaysia 2006 a eu lieu à Sunway Pyramid Convention Center et portait sur le thème “Over The Top” (Au-dessus).</br>Deux ans après leur premier V-Con européen, The V s'est également lancé dans un programme d'expansion intensif conçu spécialement pour le marché européen la même année. Euro-VCon Madrid a également servi à célébrer deux autres jalons dans l'histoire de l'entreprise: (1) le 8e anniversaire de la création du Qi Group of Companies; et (2) le Qi’s title sponsorship des Championnats du monde 2006 de la Fédération internationale de badminton (IBF) - qui ont servi à affirmer la crédibilité, le prestige et la stabilité de l'entreprise.";
                    document.getElementById('vcon-2007-title').innerHTML = "2007: V-Jakarta 2007 et V-Africa 2007";
                    document.getElementById('vcon-2007-par').innerHTML = "Avec plus de 3000 participants de 40 pays différents, le V-Jakarta 2007 s'est tenu au Jakarta Convention Center, où The V a renforcé sa passion pour le succès du réseau.</br>La même année, The V a apporté son événement dont on parle tant au Kenya et a organisé avec succès le V-Africa 2007, rassemblant plus de 2000 participants.";
                    document.getElementById('vcon-2008-title').innerHTML = "2008: V-Malaysia 2008 et V-Africa 2008";
                    document.getElementById('vcon-2008-par').innerHTML = "L'entreprise a célébré son 10e anniversaire. L'un des points forts du V-Con qui s'est déroulé à Penang International Sports Arena du 21 au 25 mai 2008 fut la Convention V-Kids où plus de 124 enfants de différents âges et nationalités ont eu droit à trois jours de plaisir et d'apprentissage. Outre la Convention V-Kids, les autres points forts de la convention comprenaient le gala spectaculaire, la nuit d’accueil et une exposition qui présentait toute la gamme des produits et services de The V et de ses sociétés sœurs.</br>Kampala, Ouganda situé en Afrique de l'Est est également devenu la ville dont tout le monde parlait car le V-Africa s’est tenu là-bas la même année, avec 1600 participants.";
                    document.getElementById('vcon-2009-title').innerHTML = "2009: V-Malaysia 2009";
                    document.getElementById('vcon-2009-par').innerHTML = "Tenu à Shah Alam, en Malaisie, ce V-Con portait sur le thème 'Change Begins' (Le changement commence).";
                    document.getElementById('vcon-2010-title').innerHTML = "2010: V-Malaysia 2010";
                    document.getElementById('vcon-2010-par').innerHTML = "Conférencier motivateur né avec le syndrome de tetra-amelia, Nick Vujicic a parlé au V-Malaysia 2010";
                    document.getElementById('vcon-2011-title').innerHTML = "2011: V-Malaysia 2011";
                    document.getElementById('vcon-2011-par').innerHTML = "En 2011, le V-Con a été annoncé avec le thème, 'Belief' (Croyance).";
                    document.getElementById('vcon-2012-title').innerHTML = "2012: V-Indonesia 2012";
                    document.getElementById('vcon-2012-par').innerHTML = "Le V-Con a encore une fois trouvé un toit à Jakarta, en Indonésie, au titre de V-Indonesia 2012, où c’était “Make A Difference” (Faire une différence) comme thème convaincant.";
                    document.getElementById('vcon-2013-title').innerHTML = "2013: V-Malaysia 2013";
                    document.getElementById('vcon-2013-par').innerHTML = "Les Rêveurs de toutes les parties du globe se sont à nouveau réunis en Malaisie en 2013 pour le V-Malaysia 2013, qui avait comme titre “RYTHM Nation” (RYTHM de Nation).";
                    document.getElementById('vcon-2014-title').innerHTML = "2014: V-Malaysia 2014";
                    document.getElementById('vcon-2014-par').innerHTML = "Cette année, le V-Con a pris un thème qui invitait les rêveurs à “Arise. Awake. Achieve.” (Se lever, Se réveiller, Atteindre.) C'était aussi le tout premier V-Con qui a fièrement présenté la place de QNET dans le monde du football après avoir signé avec Manchester City Football Club comme partenaire exclusif de vente directe.";
                    document.getElementById('vcon-2015-title').innerHTML = "2015: V-Malaysia 2015 and V-UAE 2015";
                    document.getElementById('vcon-2015-par').innerHTML = "En tant qu’année charnière pour le réseau et l'entreprise, le V-Con 2015 a pris comme thème “Game Changer” (Catalyseur du changement). C'était aussi l'avènement de la série continue de The V en organisant deux V-Conventions chaque année, avec le premier à Penang, Malaisie, et le deuxième à Dubaï, EAU.</br>Au cours de l'un des plus mémorables V-Cons à Dubaï, la championne du monde des dames de tennis, Martina Hingis a été accueillie comme notre nouvelle ambassadrice de la marque.";
                    document.getElementById('vcon-2016-title').innerHTML = "2016: V-Malaysia 2016 et V-UAE 2016";
                    document.getElementById('vcon-2016-par').innerHTML = "Un nombre record de délégués ont assisté au V-Malaysia à Penang. L'arène était pleine à craquer avec plus de quinze mille participants, faisant écho au thème 'Evolve. Empower. Enrich' (Evoluer, Autonomiser, Enrichir.).</br>Anil Kapoor, acteur et producteur indien qui est apparu dans d'innombrables films de Bollywood et internationaux; Jackie Shroff qui a été dans le cinéma hindi pendant près de quatre décennies et est apparu dans 207 films en neuf langues; et Vivek Oberoi, qui a fait ses débuts dans le cinéma hindi, sont montés sur la scène du V-UAE en 2016 pour partager comment ils ont fait le grand pas pour être là où ils sont aujourd'hui.";
                    document.getElementById('vcon-2017-title').innerHTML = "2017: V-Malaysia 2017 et V-UAE 2017";
                    document.getElementById('vcon-2017-par').innerHTML = "Pour la troisième année consécutive, le V-Con a eu lieu à Penang, en Malaisie et à Dubaï, aux EAU, avec une participation record. Le thème vibrant “DO IT NOW” (Faites-le maintenant) était le titre des deux V-Conventions. Muniba Mazari, une femme inspirante dont l'histoire de vie a attiré beaucoup d'amour et d'admiration des milliers de rêveurs au V-Malaysia et V-UAE, est ajoutée à une liste croissante de superstars qui ont rejoint notre famille pour faire partie d'une incroyable expérience V-Con.";
                    
                    
    
                    /* Call-to-Action */
                    document.getElementById('cta-title').innerHTML = "NOUS SOMMES UN";
                    document.getElementById('cta-par').innerHTML = "Apprenez à connaître la famille. Entrez dans notre maison. Suivez l'appel.";
    
    
                    /* ROOM RESERVATION */
    
                    document.getElementById('room-reservation-title').innerHTML = "COMPLÉTEZ VOTRE VOYAGE V-MALAYSIA 2018 ";
                    document.getElementById('room-reservation-par').innerHTML = "Vous recherchez des réservations d'hôtel et des transferts transport à Penang, en Malaisie du 24 au 28 avril pour vous et votre équipe? Apollo a ce qu’il faut!";
                    document.getElementById('btn-apollo').innerHTML = "RECHERCHEZ APOLLO MAINTENANT";
    
                    /* NEWS AND UPDATES */
                    document.getElementById('news-and-updates-title').innerHTML = "ACTUALITÉS ET MISES À JOUR";
                    document.getElementById('news-and-updates-par').innerHTML = "LIRE | REGARDER | AFFICHER";
    
    
                    /* INSTAGRAM POSTS */
                    document.getElementById('ig-dock-title').innerHTML = "LA MAGIE DU #VCON18 PREND LE CONTRÔLE DU MONDE";
    
                    /* FAQ */
                    document.getElementById('faqs-title').innerHTML = "Questions Fréquemment Posées";
                    document.getElementById('faq-tab-one').innerHTML = "Comment puis-je acheter un billet?";
                    document.getElementById('faq-tab-one-par').innerHTML = "Cliquez ici pour acheter votre billet V-Malaysia 2018.";
                    document.getElementById('faq-tab-two').innerHTML = "Quelles sont les modalités de paiement disponibles?";
                    document.getElementById('faq-tab-two-par').innerHTML = "Actuellement, vous pouvez payer en espèces ou par carte de crédit (Visa et MasterCard).";
                    document.getElementById('faq-tab-three').innerHTML = "Que faut-il apporter?";
                    document.getElementById('faq-tab-three-par').innerHTML = "Vous allez au V-Con? Voici les 5 choses importantes que vous devez apporter :";
                    document.getElementById('faq-tab-three-par-sub-one').innerHTML = "Lors de l'inscription, apportez une (1) pièce d'identité valide et une copie de la lettre de confirmation qui vous sera envoyée par courriel juste après l'achat de votre billet.";
                    document.getElementById('faq-tab-three-par-sub-two').innerHTML = "Ayez suffisamment d'argent de poche pour 5 jours, que vous pourrez dépenser pour la nourriture, la boisson, le transport, les produits du V-Con, les souvenirs, etc. Assurez-vous d'avoir votre argent en USD ou MYR.";
                    document.getElementById('faq-tab-three-par-sub-three').innerHTML = "De bons vêtements pour 5 jours. Assurez-vous d’apporter des chemises ou serviettes supplémentaires car il fait très chaud à Penang, en Malaisie à cette époque.";
                    document.getElementById('faq-tab-three-par-sub-four').innerHTML = "Prenez un appareil photo avec vous pour garder longtemps vos précieux souvenirs du V-Con et ayez quelque chose que vous pourrez montrer à votre famille et vos futurs prospects lorsque vous rentrerez chez vous.";
                    document.getElementById('faq-tab-three-par-sub-five').innerHTML = "Comme vous voulez savourez chaque session précieuse sur scène, assurez-vous d’apporter votre propre stylo et votre carnet pour une bonne prise de note!";
                    document.getElementById('faq-tab-four').innerHTML = "Y aura-t-il des billets à vendre le jour même de l'événement?";
                    document.getElementById('faq-tab-four-par').innerHTML = "Oui. Seules les transactions effectuées en espèces et par carte de crédit seront prises en compte.";
                    document.getElementById('faq-tab-five').innerHTML = "Y aura-t-il des billets d'une seule journée d'événement disponibles?";
                    document.getElementById('faq-tab-five-par').innerHTML = "Non. Le programme de 5 jours que nous avons préparé pour vous est quelque chose auquel il faut assister du 1er au 5e jour pour une expérience complète qui change la vie. Il s'agit d'un événement complet et holistique avec une gamme d’activités riches en action très essentielles pour votre entreprise.";
    
                    
                    /* CONTACT US */
                    document.getElementById('contact-us-title').innerHTML = "NOUS CONTACTER";
                    document.getElementById('contact-us-par-one').innerHTML = "Si vous rencontrez des difficultés à accéder à notre site Web, ou si vous avez d'autres questions qui ne sont pas disponibles sur notre page FAQ, veuillez nous contacter par nos adresses e-mail suivantes.<br/><br/><b>Support technique</b>: vbox@the-v.net <br/><b>Questions liées au contenu et à la traduction</b>: vcomm@the-v.net";
                    document.getElementById('contact-us-par-two').innerHTML = "<b>Pour toute demande de renseignements :</b><br/>Mr. Vijiyar Thevan <br/>vijiyar.thevan@the-v.net <br/>+601 2209 3793 <br/><br/>Ms. Kauri Subramaniam <br/>kauri.s@the-v.net <br/>+603 7965 8299";
    
                    /* FOLLOW US */
                    document.getElementById('follow-us-title').innerHTML = "FOLLOW US!";
                    document.getElementById('follow-us-par').innerHTML = "LIKE. TAG. SHARE.";
                }/*END OF IF*/
    
                //////////*  RU  *//////////
                if(x === '4'){
                    document.getElementById('tagline').innerHTML = "БОЛЬШЕ НЕ ИЩИТЕ.<br/>ПРОДОЛЖАЙТЕ ИДТИ И МЕНЯТЬ СВОЮ ЖИЗНЬ НАВСЕГДА.";
    
                    /* WHO, WHAT, WHY*/
                    document.getElementById('about-title').innerHTML = "КТО,  ЧТО, ПОЧЕМУ";
                    document.getElementById('about-what').innerHTML = "<b>ЧТО</b> такое  V-Con?";
                    document.getElementById('about-what-p').innerHTML = "V-Con - это опыт, о котором зачастую отзываются такими словами, как невероятный, волшебный и меняющий жизнь. V-Convention, состоявшаяся в девяти разных странах с момента ее создания в 2001 году, является грандиозной ежегодной встречей нетворкеров, организованной The V, где вас ждут серии мотивационных выступлений и тренингов мирового уровня, которые так необходимы для профессиональных нетворкеров. В месте проведения конвенции также обустраиваются выставки, ориентированные на тех, кто желает приобрести эксклюзивные товары, узнать больше информации о продуктах и воспользоваться специальными промо-акциями.";
                    document.getElementById('about-who').innerHTML = "КТО</b> участвует в V-Con?";
                    document.getElementById('about-who-p').innerHTML = "Участвовать в мероприятии могут все IR QNET, желающие лучше познать свое путешествие в сетевом маркетинге. На сегодняшний день V-Con собрала тысячи участников из разных уголков мира с рекордным числом участников.";
                    document.getElementById('about-why').innerHTML = "<b>ПОЧЕМУ </b> нужно быть на V-Con?";
                    document.getElementById('about-why-p').innerHTML = "Будучи партнером, который будет рядом с вами во время вашего пути в сетевом маркетинге, The V стремится сделать ваш опыт участия в пятидневной конвенции максимально полезным, и помочь вам заявить о своей главной цели - обретение финансовой свободы. Если вы только что зарегистрировались или в бизнесе вы уже несколько лет, невозможно принять более актуальное решение, кроме как вернуться на V-Con и реализовать свой безграничный потенциал величия.";
    
    
                    /* HISTORY */
                    document.getElementById('history-title').innerHTML = "V-CON В ИСТОРИИ";
                    document.getElementById('history-tagline').innerHTML = "В канун нашей 26-й по счету V-Con, которая состоится с 24 по 28 апреля 2018 в SPICE Arena в Penang, Malaysia, рассказываем о том, как мы меняем жизнь людей, начиная с 2001 года.";
    
                    
                    document.getElementById('vcon-2001-title').innerHTML = "";
                    document.getElementById('vcon-2001-par').innerHTML = "";
                    document.getElementById('vcon-2002-title').innerHTML = "";
                    document.getElementById('vcon-2002-par').innerHTML = "";
                    document.getElementById('vcon-2003-title').innerHTML = "";
                    document.getElementById('vcon-2003-par').innerHTML = "";
                    document.getElementById('vcon-2004-title').innerHTML = "";
                    document.getElementById('vcon-2004-par').innerHTML = "";
                    document.getElementById('vcon-2005-title').innerHTML = "";
                    document.getElementById('vcon-2005-par').innerHTML = "";
                    document.getElementById('vcon-2006-title').innerHTML = "";
                    document.getElementById('vcon-2006-par').innerHTML = "";
                    document.getElementById('vcon-2007-title').innerHTML = "";
                    document.getElementById('vcon-2007-par').innerHTML = "";
                    document.getElementById('vcon-2008-title').innerHTML = "";
                    document.getElementById('vcon-2008-par').innerHTML = "";
                    document.getElementById('vcon-2009-title').innerHTML = "";
                    document.getElementById('vcon-2009-par').innerHTML = "";
                    document.getElementById('vcon-2010-title').innerHTML = "";
                    document.getElementById('vcon-2010-par').innerHTML = "";
                    document.getElementById('vcon-2011-title').innerHTML = "";
                    document.getElementById('vcon-2011-par').innerHTML = "";
                    document.getElementById('vcon-2012-title').innerHTML = "";
                    document.getElementById('vcon-2012-par').innerHTML = "";
                    document.getElementById('vcon-2013-title').innerHTML = "";
                    document.getElementById('vcon-2013-par').innerHTML = "";
                    document.getElementById('vcon-2014-title').innerHTML = "";
                    document.getElementById('vcon-2014-par').innerHTML = "";
                    document.getElementById('vcon-2015-title').innerHTML = "";
                    document.getElementById('vcon-2015-par').innerHTML = "";
                    document.getElementById('vcon-2016-title').innerHTML = "";
                    document.getElementById('vcon-2016-par').innerHTML = "";
                    document.getElementById('vcon-2017-title').innerHTML = "";
                    document.getElementById('vcon-2017-par').innerHTML = "";
                    
                    
    
                    /* Call-to-Action */
                    document.getElementById('cta-title').innerHTML = "МЫ ЕДИНЫ";
                    document.getElementById('cta-par').innerHTML = "Познакомься с семьей. Войди в наш дом. Следуй своему призванию.";
    
    
                    /* ROOM RESERVATION */
    
                    document.getElementById('room-reservation-title').innerHTML = "ЗАВЕРШИ СВОИ ПРИГОТОВЛЕНИЯ К ПОЕЗДКЕ НА V-MALAYSIA 2018";
                    document.getElementById('room-reservation-par').innerHTML = "Хочешь забронировать гостиницу и трансферы в Пинанге (Малайзия) в дни с 24 по 28 апреля для себя и своей команды? В этом тебе поможет Apollo! ";
                    document.getElementById('btn-apollo').innerHTML = "ПОИСК В APOLLO";
    
                    /* NEWS AND UPDATES */
                    document.getElementById('news-and-updates-title').innerHTML = "НОВОСТИ И ОБЪЯВЛЕНИЯ";
                    document.getElementById('news-and-updates-par').innerHTML = "ЧИТАТЬ | СЛЕДИТЬ | СМОТРЕТЬ";
    
    
                    /* INSTAGRAM POSTS */
                    document.getElementById('ig-dock-title').innerHTML = "МАГИЯ #VCON18 ПОКОРЯЕТ МИР";
    
                    /* FAQ */
                    document.getElementById('faqs-title').innerHTML = "Часто задаваемые вопросы";
                    document.getElementById('faq-tab-one').innerHTML = "Как купить билет?";
                    document.getElementById('faq-tab-two').innerHTML = "Каковы условия платежа?";
                    document.getElementById('faq-tab-three').innerHTML = "Что взять с собой?";
                    document.getElementById('faq-tab-four').innerHTML = "Продолжится ли продажа билетов в день открытия конвенции?";
                    document.getElementById('faq-tab-five').innerHTML = "Доступен ли к покупке билет всего на один день участия?";
    
    
                    /* CONTACT US */
                    document.getElementById('contact-us-title').innerHTML = "КОНТАКТЫ";
                    document.getElementById('contact-us-par-one').innerHTML = "При наличии проблем, связанных с доступом на наш вебсайт, а также по другим вопросам, ответ на которые не найден на нашей странице вопросов и ответов, просьба обращаться по адресам электронной почты, указанным ниже.<br/><br/><b>Техническая поддержка</b>: vbox@the-v.net <br/><b>По вопросам, связанным с информационным наполнением и переводом</b>: vcomm@the-v.net";
                    document.getElementById('contact-us-par-two').innerHTML = "<b>По остальным вопросам:</b><br/>Mr. Vijiyar Thevan <br/>vijiyar.thevan@the-v.net <br/>+601 2209 3793 <br/><br/>Ms. Kauri Subramaniam <br/>kauri.s@the-v.net <br/>+603 7965 8299";
    
                    /* FOLLOW US */
                    document.getElementById('follow-us-title').innerHTML = "СЛЕДУЙ ЗА НАМИ!";
                    document.getElementById('follow-us-par').innerHTML = "ПОСТАВИТЬ ЛАЙК. ОТМЕТИТЬ. ПОДЕЛИТЬСЯ.";
                }/*END OF IF*/
    
                //////////*  MALAYSIAN?  *//////////
                if(x === '5'){
                    document.getElementById('tagline').innerHTML = "Look no further.<br/>Keep going and change your<br/>life forever.";
    
                    /* WHO, WHAT, WHY*/
                    document.getElementById('about-title').innerHTML = "SIAPA, APA, KENAPA";
                    document.getElementById('about-what').innerHTML = "<b>Apa</b> itu V-Con?";
                    document.getElementById('about-what-p').innerHTML = "V-Con adalah suatu pengalaman yang sering disamakan dengan kata-kata yang luar biasa, magis, dan mengubah hidup. Diadakan di sembilan negara yang berbeda sejak konsepsinya pada tahun 2001, V-Convention adalah sebuah pertemuan tahunan yang diselenggarakan oleh The V, di mana Anda dapat mengharapkan serangkaian pidato dan sesi motivasi kelas dunia yang penting bagi para pelaku jaringan profesional. Pameran mutakhir juga disiapkan bagi mereka yang ingin mendapatkan barang dagangan eksklusif, tahu lebih banyak tentang produk, dan memanfaatkan promo khusus.";
                    document.getElementById('about-who').innerHTML = "<b>Siapa</b> yang datang ke V-Con?";
                    document.getElementById('about-who-p').innerHTML = "Ini terbuka untuk semua IR dari QNET yang ingin mendapatkan pemahaman yang lebih baik tentang perjalanan pemasaran jaringan mereka. Sampai saat ini, V-Con telah mengumpulkan ribuan peserta dari berbagai belahan dunia, dengan pemecahan rekor untuk jumlah terbesar.";
                    document.getElementById('about-why').innerHTML = "<b>Kenapa</b> kita perlu berada di V-Con?";
                    document.getElementById('about-why-p').innerHTML = "Sebagai mitra yang akan bersama Anda disepanjang perjalanan pemasaran jaringan Anda, The V bertujuan untuk memaksimalkan konvensi 5 hari ini untuk membantu Anda menegaskan tujuan akhir Anda untuk memperoleh kebebasan finansial. Apakah itu Anda baru saja mendaftar atau telah berkecimpung dalam bisnis ini selama beberapa tahun, Anda tidak memiliki keputusan yang lebih baik selain pulang ke V-Con dan menyadari potensi tak terbatas Anda untuk kejayaan.";
    
    
                    /* HISTORY **/
                    document.getElementById('history-title').innerHTML = "V-CON MELALUI SEJARAH";
                    document.getElementById('history-tagline').innerHTML = "Sebelum V-Con yang ke 26 kita datang tanggal 24-28 April 2018 di SPICE Arena di Penang, Malaysia, di sinilah kita telah mengubah kehidupan sejak tahun 2001";
                    
                    document.getElementById('vcon-2001-title').innerHTML = "2001: V-Con Bali 2001";
                    document.getElementById('vcon-2001-par').innerHTML = "Kita melihat kelahiran acara The V terbesar dan event yang paling dinanti-nanti: V-Convention, atau V-Con. Dari sekurangnya seratus peserta dalam acara awal di Bali, Indonesia, V-Cons hari ini dihadiri oleh lebih dari lima belas ribu peserta yang mewakili 80 negara di seluruh dunia.";
                    document.getElementById('vcon-2002-title').innerHTML = "2002: V-Con Goa 2002";
                    document.getElementById('vcon-2002-par').innerHTML = "Dengan 500 peserta dari berbagai belahan dunia, V-Con 2002 di India memamerkan tema 'Inti dari Kepemimpinan' (The Essence of Leadership). Dengan perhatian menariknya, V-Con Goa diadakan dua kali untuk mengakomodasi semua peserta yang ingin mengikuti pengalaman yang luar biasa.";
                    document.getElementById('vcon-2003-title').innerHTML = "2003: V-Con Kota Kinabalu 2003";
                    document.getElementById('vcon-2003-par').innerHTML = "Pada tahun 2003, V-Con berhasil menuju Kota Kinabalu, Sabah, Malaysia, di mana V-Con ini telah mengumpulkan lebih dari 500 peserta dari 26 negara yang berbeda. Ini diarak dengan tema, 'Inti dari Kesuksesan' (The Essence of Success).";
                    document.getElementById('vcon-2004-title').innerHTML = "2004: V-Dubai 2004 dan Euro V-Con 2004";
                    document.getElementById('vcon-2004-par').innerHTML = "V-Dubai pada tahun 2004 menandai hari jadi perusahaan yang ke-6, dimana lebih dari 700 peserta hadir. Pada tahun yang sama, The V mengadakan V-Con pertamanya di Eropa di Rodos Palace Hotel di pulau Rhodes, Yunani. Dari tanggal 6 sampai 9 Juni 2004, 200 peserta berkumpul untuk membuka jaringan baru di Eropa.";
                    document.getElementById('vcon-2005-title').innerHTML = "2005: V-Thailand 2005";
                    document.getElementById('vcon-2005-par').innerHTML = "V-Thailand 2005 menampilkan kegiatan yang menyoroti semangat kita untuk mengembangkan kepemimpinan dan keunggulan kelas dunia. Karena The V percaya memulai mereka sejak muda, sebuah acara khusus yang melayani anak-anak muda pemimpin kami dimulai di V-Thailand. Acara yang sekarang dikenal dengan V-Kids dimulai dengan sekelompok kecil anak-anak yang ditangani oleh pasangan V Partners dan V Ambassadors lainnya.";
                    document.getElementById('vcon-2006-title').innerHTML = "2006: V-Malaysia 2006 dan Euro V-Con Madrid 2006";
                    document.getElementById('vcon-2006-par').innerHTML = "Ditandai sebagai V-Konvensi ke-7, V-Malaysia 2006 diadakan di Sunway Pyramid Convention Center dan diberi tema 'Melebihi puncak' (Over The Top). Dua tahun setelah V-Con Eropa pertama mereka, The V juga memulai program perluasan intensif yang dirancang khusus untuk pasar Eropa pada tahun yang sama. Euro-VCon Madrid juga bertugas untuk merayakan dua tonggak sejarah lainnya dalam sejarah perusahaan: (1) ulang tahun ke 8 berdirinya Grup Perusahaan Qi; dan (2) pemberian gelar Qi pada Kejuaraan Dunia Bulutangkis Internasional (IBF) tahun 2006 - yang berfungsi sebagai pernyataan tegas kredibilitas, wibawa dan stabilitas perusahaan.";
                    document.getElementById('vcon-2007-title').innerHTML = "";
                    document.getElementById('vcon-2007-par').innerHTML = "";
                    document.getElementById('vcon-2008-title').innerHTML = "";
                    document.getElementById('vcon-2008-par').innerHTML = "";
                    document.getElementById('vcon-2009-title').innerHTML = "";
                    document.getElementById('vcon-2009-par').innerHTML = "";
                    document.getElementById('vcon-2010-title').innerHTML = "";
                    document.getElementById('vcon-2010-par').innerHTML = "";
                    document.getElementById('vcon-2011-title').innerHTML = "";
                    document.getElementById('vcon-2011-par').innerHTML = "";
                    document.getElementById('vcon-2012-title').innerHTML = "";
                    document.getElementById('vcon-2012-par').innerHTML = "";
                    document.getElementById('vcon-2013-title').innerHTML = "";
                    document.getElementById('vcon-2013-par').innerHTML = "";
                    document.getElementById('vcon-2014-title').innerHTML = "";
                    document.getElementById('vcon-2014-par').innerHTML = "";
                    document.getElementById('vcon-2015-title').innerHTML = "";
                    document.getElementById('vcon-2015-par').innerHTML = "";
                    document.getElementById('vcon-2016-title').innerHTML = "";
                    document.getElementById('vcon-2016-par').innerHTML = "";
                    document.getElementById('vcon-2017-title').innerHTML = "";
                    document.getElementById('vcon-2017-par').innerHTML = "";
                    
    
                    /* Call-to-Action */
                    document.getElementById('cta-title').innerHTML = "WE ARE ONE";
                    document.getElementById('cta-par').innerHTML = "Get to know the family. Enter our home. Follow the calling. If you must make one great decision today, let this be THE ONE. Book your V-Malaysia 2018 tickets here!";
    
    
                    /* ROOM RESERVATION */
    
                    document.getElementById('room-reservation-title').innerHTML = "COMPLETE YOUR V-MALAYSIA 2018 JOURNEY";
                    document.getElementById('room-reservation-par').innerHTML = "Looking for hotel reservations and transportation transfers in Penang, Malaysia from 24 to 28 April for you and your team? Apollo got you covered!";
                    document.getElementById('btn-apollo').innerHTML = "SEARCH APOLLO NOW";
    
                    /* NEWS AND UPDATES */
                    document.getElementById('news-and-updates-title').innerHTML = "NEWS & UPDATES";
                    document.getElementById('news-and-updates-par').innerHTML = "READ | WATCH | VIEW";
    
    
                    /* INSTAGRAM POSTS */
                    document.getElementById('ig-dock-title').innerHTML = "THE #VCON18 MAGIC TAKING OVER THE WORLD";
    
                    /* FAQ **/
                    document.getElementById('faqs-title').innerHTML = "FREQUENTLY ASKED QUESTIONS";
                    
                    document.getElementById('faq-tab-one').innerHTML = "How do I purchase a ticket?";
                    document.getElementById('faq-tab-one-par').innerHTML = "Click to buy your V-Malaysia 2018 ticket.";
                    document.getElementById('faq-tab-two').innerHTML = "What are the available payment terms?";
                    document.getElementById('faq-tab-two-par').innerHTML = "Currently, you can pay with cash or credit card (Visa and MasterCard).";
                    document.getElementById('faq-tab-three').innerHTML = "What to bring?";
                    document.getElementById('faq-tab-three-par').innerHTML = "Going to V-Con? Here are 5 important things you need to bring:";
                    document.getElementById('faq-tab-three-par-sub-one').innerHTML = "During registration, bring one (1) valid ID and copy of the confirmation letter that will be sent to you via email right after the purchase of your ticket.";
                    document.getElementById('faq-tab-three-par-sub-two').innerHTML = "Enough pocket money to last for 5 days, which you may spend on food, drinks, transportation, V-Con merchandise, souvenirs, etc. Make sure to have your money either in USD or MYR. ";
                    document.getElementById('faq-tab-three-par-sub-three').innerHTML = "Clothes good for 5 days. Make sure to bring extra shirts or towels as it is extra warm in Penang, Malaysia around this time.";
                    document.getElementById('faq-tab-three-par-sub-four').innerHTML = "Take a camera with you to make your precious V-Con memories last, and have something you can show to your family and future prospects when you go back home.";
                    document.getElementById('faq-tab-three-par-sub-five').innerHTML = "As you want to savour every valuable session on stage, make sure to bring your own pen and notebook for some serious note-taking!";
                    document.getElementById('faq-tab-four').innerHTML = "Will there be tickets for sale on the day of the event itself?";
                    document.getElementById('faq-tab-four-par').innerHTML = "Yes. Only transactions made thru cash and credit card will be accommodated.";
                    document.getElementById('faq-tab-five').innerHTML = "Will there be single-day event tickets available?";
                    document.getElementById('faq-tab-five').innerHTML = "No. The 5-day program we prepared for you is something that should be attended from Day 1 to 5 for a complete life-changing experience. It is a comprehensive, holistic event with an action-packed line-up of activities that are highly essential for your business.";
    
    
                    /* CONTACT US */
                    document.getElementById('contact-us-title').innerHTML = "CONTACT US";
                    document.getElementById('contact-us-par-one').innerHTML = "If you are having trouble accessing our website, or you have further questions which are not available in our FAQ page, please get in touch with us through our following email addresses.<br/><br/><b>Technical Support</b>: vbox@the-v.net <br/><b>Content and Translation Concerns</b>: vcomm@the-v.net";
                    document.getElementById('contact-us-par-two').innerHTML = "<b>For inquiries:</b><br/>Mr. Vijiyar Thevan <br/>vijiyar.thevan@the-v.net <br/>+601 2209 3793 <br/><br/>Ms. Kauri Subramaniam <br/>kauri.s@the-v.net <br/>+603 7965 8299";
    
                    /* FOLLOW US */
                    document.getElementById('follow-us-title').innerHTML = "FOLLOW US!";
                    document.getElementById('follow-us-par').innerHTML = "LIKE. TAG. SHARE.";
                }/*END OF IF*/
                
                
            };
    });
    
    