import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Fade, Zoom, Reveal } from "react-awesome-reveal";
import { useSelector } from "react-redux";

const PrivacyPolicy = () => {
  const activeTheme = useSelector((state) => {
    return (
      state && state?.persistedReducer?.theme?.dayTheme
    );
  });

  return (
    <>
     <Helmet>
        <title>Privacy Policy - GK Builders & Developers</title>
      </Helmet>
     
     
     
    <section className={activeTheme ? "dayText" : "nightText"}>
        <Container>
        <Fade  bottom delay={100}> <h2 className="fs70 mb0 brownGradient text-center mb70">  Privacy Policy</h2> </Fade>
        <Row className="mb30">
        <Col className="m-auto" md={10}>
                		<h3>PRIVACY POLICY</h3>
                		 <p>This privacy policy sets out how “GK Builders and Developers” uses and protects any information that you give “GK Builders and Developers” when you use this website.</p>
						<p>“GK Builders and Developers” is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used under this privacy statement.</p>
						<p>“GK Builders and Developers” may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes.</p>
						<p>This policy is effective from  1<sup>st</sup> March 2022.</p>

						<h3>WHAT WE COLLECT</h3>
						<p>We may collect the following information:</p>
						<ul>
							<li>Name and job title</li>
							<li>Contact information including email address</li>
							<li>Demographic information such as postcode, preferences and interests</li>
							<li>Other information relevant to customer surveys/offers</li>
						</ul>

						<h3>WHAT WE DO WITH THE INFORMATION WE GATHER</h3>
						<p>We require this information to understand your needs and provide you with a better service, in particular for the following reasons:</p>
						<ul>
							<li>Internal record keeping.</li>
							<li>We may use the information to improve our products and services.</li>
							<li>We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address you have provided.</li>
							<li>From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail.</li>
							<li>We may use the information to customize the website according to your interests.</li>
						</ul>

						<h3>SECURITY</h3>
						<p>We are committed to ensuring that your information is secure. To prevent unauthorized access or disclosure we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.</p>

                        <h3>HOW WE USE COOKIES</h3>
                        <p>A cookie is a small file which asks permission to be placed on your computer’s hard drive. Once you agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.</p>
                        <p>We use traffic log cookies to identify which pages are being used. This helps us analyse data about web page traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system. Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.</p>
                        <p>You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.</p>
                        <h3>LINKS TO OTHER WEBSITES</h3>
                        <p>Our website may contain links to enable you to visit other websites of interest easily. However, once you have used these links to leave our site, you should note that we do not have any control over the other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.</p>
                        <h3>CONTROLLING YOUR PERSONAL INFORMATION</h3>
                        <p>You may choose to restrict the collection or use of your personal information in the following ways:</p>
                        <ul>
                        	<li>Whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes</li>
                        	<li>If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or email us</li>
                        </ul>
                        <p>We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.</p>

                        <h3>TERMS &amp; CONDITIONS</h3>
                        <p>To avail of the services offered at www.gkdevelopers.in, you must agree to the following terms and conditions:</p>
                        <p>Please read the Terms and Conditions carefully. While using any current or future services offered by www.gkdevelopers.in, whether or not included in the www.gkdevelopers.in. Website, you will abide by these Terms &amp; Conditions the guidelines and conditions applicable to such service or business.</p>

                        <h3>Privacy Policy</h3>
                        <p>Please review our Privacy Policy, which also governs your visit to www.gkdevelopers.in, to fully understand our practices.</p>
                        <h3>Electronic Communication</h3>
                        <p>When you visit www.gkdevelopers.in or voluntarily send emails to us, you are communicating with us electronically. We will keep a record of this information so that we can respond to you periodically. We only collect information from you when you register on our website or fill out a form. Also, when filling out a form on our website, you may be asked to enter your: Name, E-mail address or Phone / Mobile Number. You may, however, visit our website anonymously. By communicating with us and submitting your personal information and contact details, you consent to receive communication from us through Email, SMS, Call, WhatsApp or any other communication medium, even if your number has DND activated on it. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communication be in writing.</p>

                        <h3>License and Website Access</h3>
                        <h3>General</h3>
                        <p><a target="_blank" href="https://gkdevelopers.in/">www.gkdevelopers.in</a> grants you a limited license to access and make personal use of this website and not to download (other than page caching) or modify it, or any portion of it, except with express written consent of <a target="_blank" href="https://gkdevelopers.in/">www.gkdevelopers.in</a></p>
                        <h3>No License For Commercial Sale</h3>
                        <p>This license does not include any resale or commercial use of this website or its content; any collection and use of any product listing, description, or pricing; copying of account information for the benefit of another merchant; or any use of data mining, or similar data gathering and extraction tools.</p>
                        <h3>No Reproduction</h3>
                        <p>This website or any portion of this website may not be reproduced, duplicated, copied, sold, visited, or otherwise exploited for any commercial purpose without the express written consent of <a target="_blank" href="https://gkdevelopers.in/">www.gkdevelopers.in</a></p>
                        <h3>No Framing</h3>
                        <p>You may not frame or utilize framing technologies to enclose any trademark, logo, or other proprietary information (including images, text, page layout, or form) of www.gkdevelopers.in without the express written consent.</p>
                        <h3>Meta Tags</h3>
                        <p>You may not use any metatags or any other 'hidden text' utilizing GK Builders and Developers’s name or trademarks without the express written consent of <a target="_blank" href="https://gkdevelopers.in/">www.gkdevelopers.in</a>. Any unauthorized use terminates the permission or license granted by <a target="_blank" href="https://gkdevelopers.in/">www.gkdevelopers.in</a></p>
                        <p>Reviews, Comments, Communications, and other content</p>
                        <h3>Nature Of Content</h3>
                        <p>Visitors to <a target="_blank" href="https://gkdevelopers.in/">www.gkdevelopers.in</a> may post content and other communications; and submit suggestions, ideas, comments, questions or other information, as long as the content is not illegal, obscene, threatening, defamatory, invasive of privacy, infringing of intellectual property rights to otherwise injuries to a third party or objectionable and does not consist of or contains a software virus, political campaigning, commercial solicitation, mass mailing or any form of spam.</p>
                        <h3>False Information</h3>
                        <p>You may not use a false email address, impersonate any person or entity, or otherwise mislead as to the origin of a card or other content. www.gkdevelopers.in reserves the right (but not the obligation) to remove or edit such content but does not regularly review posted content.</p>

                        <h3>Rights Granted</h3>
                        <p>If you do post content or submit material and unless we indicate otherwise, you grant www.gkdevelopers.in a non-exclusive, royalty free, perpetual, irrevocable, and fully sub-licensed right to use, reproduce, modify, adapt, publish, translate, create derivative work from, distribute, and display such content throughout the world in any media. You grant www.gkdevelopers.in the right to use the name that you submit in connection with such content if <a target="_blank" href="https://gkdevelopers.in/">www.gkdevelopers.in</a> chooses.</p>

                        <h3>Right Owned</h3>
                        <p>You represent and warrant that you own all the rights or control all of the rights to the content that you post; that the content is accurate; that the use of the content to supply does not violate this policy and will not cause injury to any person or entity and that you will indemnify www.gkdevelopers.in for all claims resulting from the content you supply. www.gkdevelopers.in has the right but not the obligation to monitor and edit or remove any activity or content. www.gk developers intakes no responsibility and assumes no liability for any content posted by you or any third party.</p>

                        <h3>Site Policies, Modification, and Severability</h3>
                        <p>Please review our other policies. We reserve the right to make changes to our website, policies, and these Terms and Conditions at any time. If any of these conditions shall be deemed invalid, void, or for any reason unenforceable, that condition shall be deemed severable and will not affect the validity and enforceability of any remaining conditions.</p>

                        <h3>INTELLECTUAL PROPERTY RIGHTS</h3>
                        <h3>Copyright Protection</h3>
                        <p>All content included on this site, such as text, graphics, logos, button icons, audio clips, digital downloads, data compilations and software, is the property of www.gkdevelopers.in and protected by the Indian Copyright law. The compilation of all the content on this site is the exclusive property of www.gkdevelopers.in and is protected by Indian Copyright law. All software used on this site is the property of www.gkdevelopers.in and is protected under Indian Copyright law.</p>

                        <h3>Trademarks</h3>
                        <ul>
                        	<li>Protected Marks:<a target="_blank" href="https://gkdevelopers.in/">www.gkdevelopers.in</a>, and other marks indicated on <a target="_blank" href="https://gkdevelopers.in/">www.gkdevelopers.in</a> website are    registered trademarks of <a target="_blank" href="https://gkdevelopers.in/">www.gkdevelopers.in</a></li>
                        	<li>Protected Graphics:All <a target="_blank" href="https://gkdevelopers.in/">www.gkdevelopers.in</a> graphics, logos, page headers, button icons, scripts and service names are trademarks of <a target="_blank" href="https://gkdevelopers.in/">www.gkdevelopers.in</a>. <a target="_blank" href="https://gkdevelopers.in/">www.gkdevelopers.in</a> trademarks may not be used in connections with any product or service that is not of <a target="_blank" href="https://gkdevelopers.in/">www.gkdevelopers.in</a>.</li>
                        </ul>

                        <h3>Governing Law and Jurisdiction</h3>
                        <p>These terms and conditions will be construed only in accordance with the laws of India. In respect of all matters/disputes arising out of, in connection with or in relation to these terms and conditions or any other conditions on this website, only the competent Courts at Hyderabad, Hyderabad shall have jurisdiction, to the exclusion of all other courts.</p>

                        <h3>Disclaimer of warranties and Limitation of Liability</h3>
                        <p><small>THIS SITE IS PROVIDED BY GK BUILDERS AND DEVELOPERS ON AN "AS IS" AND "AS AVAILABLE" BASIS. GK BUILDERS AND DEVELOPERS MAKE NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THIS SITE OR THE INFORMATION, CONTENT, MATERIALS, OR PRODUCTS INCLUDED ON THIS SITE. YOU EXPRESSLY AGREE THAT YOUR USE OF THIS SITE IS AT YOUR SOLE RISK.</small></p>
                        <p><small>TO THE FULL EXTENT PERMISSIBLE BY APPLICABLE LAW, WWW.GKDEVELOPERS.IN DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. WWW.GKDEVELOPERS.IT DOES NOT WARRANT THAT THE SITE, ITS SERVERS, OR EMAIL SENT FROM WWW.GKDEVELOPERS.IN ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. WWW.GKDEVELOPERS.IT WILL NOT BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING FROM THE USE OF THIS SITE, INCLUDING, BUT NOT LIMITED TO DIRECT, INDIRECT, INCIDENTAL, PUNITIVE AND CONSEQUENTIAL DAMAGES.</small></p>

                    </Col>
        </Row>
    
      
        </Container>
    </section>
   
    </>
  );
};

export default PrivacyPolicy;
