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
            
            var x = 2;
            
            
            //////////*  ENGLISH  *//////////
            if(x === 0){
                document.getElementById('tagline').innerHTML = "Look no further.<br/>Keep going and change your<br/>life forever.";

                /* WHO, WHAT, WHY*/
                document.getElementById('about-title').innerHTML = "WHO, WHAT, WHY";
                document.getElementById('about-what').innerHTML = "<b>WHAT</b> is V-Con?";
                document.getElementById('about-what-p').innerHTML = "V-Con is an experience that is often equated with the words unbelievable, magical, and life-changing. Held in nine different countries since its conception in 2001, the V-Convention is an annual grand gathering hosted by The V, where you can expect a series of world-class motivational speeches and training sessions that are essential for professional networkers. State-of-the-art exhibitions are also set up for those who wish to get exclusive merchandise, know more about products, and avail of special promos.";
                document.getElementById('about-who').innerHTML = "WHO</b> goes to V-Con?";
                document.getElementById('about-who-p').innerHTML = "It is open to all IRs of QNET who wish to gain a better sense of their network marketing journey. To date, V-Con has gathered thousands of attendees from different parts of world, with record-breaking numbers to boot.";
                document.getElementById('about-why').innerHTML = "<b>WHY</b> do you need to be at V-Con?";
                document.getElementById('about-why-p').innerHTML = "As a partner who will be with you throughout your network marketing journey, The V aims to maximize this 5-day convention to help you claim your ultimate goal of gaining financial freedom. Whether you just signed up or have been in the business for several years, you have no better decision but to come home to V-Con and realize your limitless potential for greatness.";


                /* HISTORY */
                document.getElementById('history-title').innerHTML = "V-CON THROUGH HISTORY";
                document.getElementById('history-tagline').innerHTML = "Before our 26th V-Con this coming 24 to 28 April 2018 at SPICE Arena in Penang Malaysia, here's where we've been changing lives since 2001";


                /* Call-to-Action */
                document.getElementById('cta-title').innerHTML = "WE ARE ONE";
                document.getElementById('cta-body').innerHTML = "Get to know the family. Enter our home. Follow the calling. If you must make one great decision today, let this be THE ONE. Book your V-Malaysia 2018 tickets here!";


                /* ROOM RESERVATION */

                document.getElementById('room-reservation-title').innerHTML = "COMPLETE YOUR V-MALAYSIA 2018 JOURNEY";
                document.getElementById('room-reservation-par').innerHTML = "Looking for hotel reservations and transportation transfers in Penang, Malaysia from 24 to 28 April for you and your team? Apollo got you covered!";
                document.getElementById('btn-apollo').innerHTML = "SEARCH APOLLO NOW";

                /* NEWS AND UPDATES */
                document.getElementById('news-and-updates-title').innerHTML = "NEWS & UPDATES";
                document.getElementById('news-and-updates-par').innerHTML = "READ | WATCH | VIEW";


                /* INSTAGRAM POSTS */
                document.getElementById('ig-dock-title').innerHTML = "THE #VCON18 MAGIC TAKING OVER THE WORLD";

                /* FAQ */
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
            
            
            //////////*  ARABIC  *//////////
            if(x===1){
                document.getElementById('tagline').innerHTML = "لا تبحث أكثر من ذلك.<br/>استمر في التقدم، وغيّر حياتك إلى الأبد.";

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
            
            //////////*  FRENCH  *//////////
            if(x === 2){
                document.getElementById('tagline').innerHTML = "NE CHERCHEZ PAS PLUS LOIN.<br/>CONTINUEZ ET CHANGEZ VOTRE VIE POUR TOUJOURS.";

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


                /* Call-to-Action */
                document.getElementById('cta-title').innerHTML = "NOUS SOMMES UN";
                document.getElementById('cta-body').innerHTML = "Apprenez à connaître la famille. Entrez dans notre maison. Suivez l'appel.";


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
                document.getElementById('faq-tab-two').innerHTML = "Quelles sont les modalités de paiement disponibles?";
                document.getElementById('faq-tab-three').innerHTML = "Que faut-il apporter?";
                document.getElementById('faq-tab-four').innerHTML = "Y aura-t-il des billets à vendre le jour même de l'événement?";
                document.getElementById('faq-tab-five').innerHTML = "Y aura-t-il des billets d'une seule journée d'événement disponibles?";


                /* CONTACT US */
                document.getElementById('contact-us-title').innerHTML = "NOUS CONTACTER";
                document.getElementById('contact-us-par-one').innerHTML = "Si vous rencontrez des difficultés à accéder à notre site Web, ou si vous avez d'autres questions qui ne sont pas disponibles sur notre page FAQ, veuillez nous contacter par nos adresses e-mail suivantes.<br/><br/><b>Support technique</b>: vbox@the-v.net <br/><b>Questions liées au contenu et à la traduction</b>: vcomm@the-v.net";
                document.getElementById('contact-us-par-two').innerHTML = "<b>Pour toute demande de renseignements :</b><br/>Mr. Vijiyar Thevan <br/>vijiyar.thevan@the-v.net <br/>+601 2209 3793 <br/><br/>Ms. Kauri Subramaniam <br/>kauri.s@the-v.net <br/>+603 7965 8299";

                /* FOLLOW US */
                document.getElementById('follow-us-title').innerHTML = "FOLLOW US!";
                document.getElementById('follow-us-par').innerHTML = "LIKE. TAG. SHARE.";
            }/*END OF IF*/
            
            
            
            
        };
});

