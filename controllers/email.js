const {errorHandler} = require("../helpers/dbErrorHandler");
const sgMail = require("@sendgrid/mail");
const moment = require('moment');
sgMail.setApiKey(process.env.SDMAILKEY);


exports.mail = (req, res) => {
    let lastname,
        email2,
        userID;

    for (let ingredients of req.profileByEmail) {
        userID = ingredients._id
        lastname = ingredients.lastname;
        email2 = ingredients.email;
    }

    const emailData = {
        to: `${email2}`,
        from: "marketreports@nasdng.com",
        subject: "Your Verification needs attention",
        html: `
      <div style="background-color:#efeff0;font-family:'Montserrat',Arial,Helvetica,sans-serif;color:#072360;font-size:16px;line-height:1.6;padding-top:40px;padding-bottom:40px">


      <table cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;margin-top:40px;margin-right:auto;margin-bottom:40px;margin-left:auto;border-collapse:collapse;border:none">
          <tbody>
              <tr>
                  <td>
                      
                      <div style="border:1px solid #cdced2;background-color:#fff;border-radius:4px">
                          <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;background-color:#fff;border-radius:4px">
                              <tbody>
                                  
                                  <tr>
                                      <td style="background-color:#072360;padding:24px 30px 24px 30px;border-top-left-radius:4px;border-top-right-radius:4px">
                                          <img src="https://nasdng.com/wp-content/uploads/2019/06/nasdlogo.jpg" alt="" title="" width="146" height="38" class="CToWUd">
                                      </td>
                                  </tr>
                                  
                                  <tr>
                                      <td style="padding:40px 32px 0 32px">
                                          <p>Hello ${lastname},</p>
      
      <p>Thank you for registering with Ventureramp - The Crowd Funding & Investing Portal of the NASD OTC Securities Exchange.     </p>
      
      <div style="border-radius:4px;border:none!important;background-color:#f3f3f4;padding:24px!important;margin:0 0 24px 0!important">
          <p><em style="white-space:pre-line">To complete your registration, please click on the following link below:
          <a href="${process.env.EMAIL}/verification/${userID}" target="_blank" data-saferedirecturl="${process.env.EMAIL}/verification/${userID}">go to your application</a></em></p>
      </div>
    
      <p>   Do not respond to this email, please contact us directly at marketoperations@nasdng.com</p>
      
     
      
      <p>Best regards,<br>
      NASD Plc</p>
                                      </td>
                                  </tr>
                                  
                                  <tr>
                                      <td>
                                          <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;margin-bottom:32px">
                                              <tbody>
                                                  <tr>
                                                      <td>
                                                          <div style="background-color:#fcdfeb;border-radius:4px;margin:40px 32px 0px 32px">
                                                              <table cellpadding="8px" cellspacing="0" border="0" style="border-collapse:collapse">
                                                                  <tbody>
                                                                      <tr>
                                                                          <td>
                                                                              <p style="margin:0 8px 0 8px;padding:0;font-size:14px;line-height:1.4">
                                                                              Investing in early-stage companies puts your capital at risk. Please read our  <a style="color:#072360;font-weight:500" href="https://nasdfundy.com/risk/warning" target="_blank" data-saferedirecturl="https://nasdfundy.com/risk/warning">Risk Warning Statement.</a>
                                                                              </p>
                                                                          </td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
                                                          </div>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                                  
                              </tbody>
                          </table>
                      </div>
                  </td>
              </tr>
              
              <tr>
                  <td>
                      <table cellpadding="0" cellspacing="0" border="0" style="max-width:600px;margin:0 24px 24px 24px;border-collapse:collapse">
                          <tbody>
                              
                              <tr>
                                  <td>
                                      <table cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;margin-top:24px">
                                          <tbody>
                                          <tr>
                                              <td style="width:100%">
                                                  <a href="http://nasdng.com/" target="_blank" data-saferedirecturl="http://nasdng.com/">
                                                      <img width="134px" height="35px" src="https://nasdng.com/wp-content/uploads/2020/02/logo.png" alt="NASD logo" class="CToWUd">
                                                  </a>
                                              </td>
                                              <td style="vertical-align:bottom">
                                                  
                                                  <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse">
                                                      <tbody>
                                                      <tr>
                                                          <td style="padding-left:8px">
                                                              <a style="text-decoration:none" href="#" target="_blank" data-saferedirecturl="#">
                                                                  <img width="20px" height="20px" src="https://ci5.googleusercontent.com/proxy/RejWPV8BkIx5goU7fr8wKuS8Wo1X9hDRt9xXXWXHt1_Q2RtfLTvQM6b5CAMXd8_XCwbFRXCFyRT-J3km_i_QPP3PMGSag34i0F38q15p4XFB=s0-d-e1-ft#https://funderbeam-706056.c.cdn77.org/assets/icon-facebook.png" alt="Facebook icon" class="CToWUd">
                                                              </a>
                                                          </td>
                                                          <td style="padding-left:8px">
                                                              <a style="text-decoration:none" href="#" target="_blank" data-saferedirecturl="#">
                                                                  <img width="20px" height="20px" src="https://ci6.googleusercontent.com/proxy/69URAyjvpFYrVf7At06kR6DpMTXrVHqNr-neePvzSIiiWyFdvaPnqbvytBTZfpnINhcGEoEWWadKvBUriWXxKwt18BKlKS03hwAX6se2Cw=s0-d-e1-ft#https://funderbeam-706056.c.cdn77.org/assets/icon-medium.png" alt="Medium icon" class="CToWUd">
                                                              </a>
                                                          </td>
                                                          <td style="padding-left:8px">
                                                              <a style="text-decoration:none" href="#" target="_blank" data-saferedirecturl="#">
                                                                  <img width="20px" height="20px" src="https://ci6.googleusercontent.com/proxy/43QC1AVLaf3UedgVk0fiw32oV6iokppAofkXgiBk0NFt1q_CiZ6Lq4LYPzDgZ_88dRZP09ePMJ6NYOUDWt9vicgNFK08n60XvwpzaiFfvNc=s0-d-e1-ft#https://funderbeam-706056.c.cdn77.org/assets/icon-youtube.png" alt="Youtube icon" class="CToWUd">
                                                              </a>
                                                          </td>
                                                          <td style="padding-left:8px">
                                                              <a style="text-decoration:none" href="#" target="_blank" data-saferedirecturl="#">
                                                                  <img width="20px" height="20px" src="https://ci6.googleusercontent.com/proxy/JocQPxrYfpEG4kXM4jlEZeqEYjEtlEFb-tBWa73OGL89HvhOyVWCkfotaSDtL2kLGzCLtwy7Lp_4qRg9CGbrGkUMtB8Vd3RlFZfGsLwY-ec=s0-d-e1-ft#https://funderbeam-706056.c.cdn77.org/assets/icon-twitter.png" alt="Twitter icon" class="CToWUd">
                                                              </a>
                                                          </td>
                                                          <td style="padding-left:8px">
                                                              <a style="text-decoration:none" href="#" target="_blank" data-saferedirecturl="#">
                                                                  <img width="20px" height="20px" src="https://ci3.googleusercontent.com/proxy/a2542OUpCVoUf2WSpRROYMG7L80TZV5TtMk4dqnbnCFs1cfSs5Q_rAZEnav8EzfZr2jZGKLxm_9G2hungWXkQUvQrycsKGLs1p6ZxzzaEsOV=s0-d-e1-ft#https://funderbeam-706056.c.cdn77.org/assets/icon-linkedin.png" alt="LinkedIn icon" class="CToWUd">
                                                              </a>
                                                          </td>
                                                      </tr>
                                                      </tbody>
                                                  </table>
                                              </td>
                                          </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                              
                              <tr>
                                  <td>
                                      <p><a style="font-size:14px;font-weight:300;text-decoration:none;color:#072360;margin:16px auto 16px auto" href="https://nasdng.com/" target="_blank" data-saferedirecturl="https://nasdng.com/">www.nasdng.com</a></p>
                                  </td>
                              </tr>
                              
                             
                              
                              <tr>
                                  <td style="border-top:1px solid #cdced2">
                                      <p style="font-size:12px;color:#6c6f7a;margin-top:40px">
                                      This email is sent to you by NASD Plc in connection with your registration on NASD CrowdFunding Portal or otherwise related services. </p>
                                       
                                      <p style="font-size:12px;color:#6c6f7a;margin-top:40px">  Please note that the information appearing in this email may contain financial promotions approved either by NASD Plc (authorised and regulated by the Securities and Exchange Commission).</p>
                                       
                                      <p style="font-size:12px;color:#6c6f7a;margin-top:40px">     Kindly be advised that the purpose of this email is to keep you informed only and not be taken as an advice.
                                      </p>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </td>
              </tr>
          </tbody>
      </table>
      
      <img src="https://ci4.googleusercontent.com/proxy/_8zm6Cxd7tjpdAhIqccSYYmJqPCE3YEVE3phe0uxcXetgp39rgH_EIejnhY8VrY6r4DU581NHM7CWjAB-uKHtrQDEr-6TppwBlwff3tAdkjFmxlXZl2hwlusPp0jmcLb-8r7XhMajL78tuO2ARWDgKNkKyaqdhpui_w4RUym-nehVRUaFhLedK96vnF1-7ZvgKqhSU_FdyKWErCTg1Ybs-qpFDM5cLNRYVL3B8cf_KWR-DDWmZTIH0pBeGZg5ySUjvX8RIq9WUZ3AZHQW_e_4pnhsOpY3axjCCto3wGJ62-4aTLP9YcBDJmHtQmWbLnfmRiaR3sXgeNaaRQsfusCsaNGWuDmw1d3w5lGV3YPbPqiOf6UTj-86oxAPf7mxinAF1CFNib3E1uaWGT0Ke_5JE-S052CSoqPHQzYIAbtLkCF1cHQSqYDztXSgUr2SID9sVwbCGD-0vy5o7Bblsx3Mdbo3bxFpDTxGiy3t6SW-PRLAhBAGee0ONpzfIv2CDE2-9uuX4ji1YkL61IET-Fn350QqqWNQT4G1qvl5GOKIEBE__GP4GO3bDgCZ3-MA8o6ijMid8f5LdeHWZsWJF3Xcne9jQg=s0-d-e1-ft#http://url5461.funderbeam.com/wf/open?upn=XjKICczDu8Qh3LA7IP1hpAQloW5TjpM-2F7EgfowHD7CirnzVuumPojY-2B9SPU44Fpj-2FSMMOc-2BfaHmme5hGZ8A7Op4PSV4CSbJtOdUu24i3bfKJ-2B8xua-2BoqRrhGtJAspl9T6sLpH6H2MwEjI8mCJYTmKTTKy3X-2BYnFJBc2nrPdzrF2UU3Iu0Dcs2TIbhW9fk7bQUJQP9LVYXnPuBLcEsgY1uPkk7WmdHG8KuCw7bF8yX8UqiR-2B3j887SCVKOKHnJKtewL3g4yx5JpnfQ5-2FkEO-2FS0n8ND8SUFe20790YgAQ4-2BVq9mWkuf2Bz1UNuY-2FrvsW9QmQd0knAe8VmvEeBYVTsD7snnHOG13XOf6kYfZjhy92Y-3D" alt="" width="1" height="1" border="0" style="height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important" class="CToWUd"></div>
          `
    };
    sgMail.send(emailData).then(sent => console.log("SENT 2 >>>")).catch(err => console.log("ERR 2 >>>", err));

    res.json(`Mail sent ${email2}`);
};


exports.passwordReset = (req, res) => {
    let lastname,
        email2,
        userID;

    for (let ingredients of req.profileByEmail) {
        userID = ingredients._id
        lastname = ingredients.lastname;
        email2 = ingredients.email;
    }

    const emailData = {
        to: `${email2}`,
        from: "marketreports@nasdng.com",
        subject: "Your NASD account - Forgot your password?",
        html: `
        <div style="background-color:#efeff0;font-family:'Montserrat',Arial,Helvetica,sans-serif;color:#072360;font-size:16px;line-height:1.6;padding-top:40px;padding-bottom:40px">
  
  
        <table cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;margin-top:40px;margin-right:auto;margin-bottom:40px;margin-left:auto;border-collapse:collapse;border:none">
            <tbody>
                <tr>
                    <td>
                        
                        <div style="border:1px solid #cdced2;background-color:#fff;border-radius:4px">
                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;background-color:#fff;border-radius:4px">
                                <tbody>
                                    
                                    <tr>
                                        <td style="background-color:#072360;padding:24px 30px 24px 30px;border-top-left-radius:4px;border-top-right-radius:4px">
                                            <img src="https://nasdng.com/wp-content/uploads/2019/06/nasdlogo.jpg" alt="" title="" width="146" height="38" class="CToWUd">
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td style="padding:40px 32px 0 32px">
                                            <p>Hi ${lastname},</p>
        
        <p>Did you forget your password? No problem - click on the link below to change it now.     </p>
        
        <div style="border-radius:4px;border:none!important;background-color:#f3f3f4;padding:24px!important;margin:0 0 24px 0!important">
            <p><em style="white-space:pre-line">To reset your password, please click on the following link:
            <a href="${process.env.EMAIL}/password/reset/${userID}" target="_blank" data-saferedirecturl="${process.env.EMAIL}/password/reset/${userID}">go to password reset</a></em></p>
        </div>
      
        <p>  If you did not ask to reset your password, please ignore this email and nothing will change.</p>
        <p>If you would like to know more about our services, please also refer to these FAQs from our customers.</p>
        
       
        
        <p>Best regards,<br>
        NASD</p>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>
                                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;margin-bottom:32px">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div style="background-color:#fcdfeb;border-radius:4px;margin:40px 32px 0px 32px">
                                                                <table cellpadding="8px" cellspacing="0" border="0" style="border-collapse:collapse">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <p style="margin:0 8px 0 8px;padding:0;font-size:14px;line-height:1.4">
                                                                                    Investing in early-stage and growth companies puts your capital at risk. Please read our <a style="color:#072360;font-weight:500" href="#" target="_blank" data-saferedirecturl="#">Risk Disclosure Statement.</a>
                                                                                </p>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
                
                <tr>
                    <td>
                        <table cellpadding="0" cellspacing="0" border="0" style="max-width:600px;margin:0 24px 24px 24px;border-collapse:collapse">
                            <tbody>
                                
                                <tr>
                                    <td>
                                        <table cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;margin-top:24px">
                                            <tbody>
                                            <tr>
                                                <td style="width:100%">
                                                    <a href="http://nasdng.com/" target="_blank" data-saferedirecturl="http://nasdng.com/">
                                                        <img width="134px" height="35px" src="https://nasdng.com/wp-content/uploads/2020/02/logo.png" alt="NASD logo" class="CToWUd">
                                                    </a>
                                                </td>
                                                <td style="vertical-align:bottom">
                                                    
                                                    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse">
                                                        <tbody>
                                                        <tr>
                                                            <td style="padding-left:8px">
                                                                <a style="text-decoration:none" href="#" target="_blank" data-saferedirecturl="#">
                                                                    <img width="20px" height="20px" src="https://ci5.googleusercontent.com/proxy/RejWPV8BkIx5goU7fr8wKuS8Wo1X9hDRt9xXXWXHt1_Q2RtfLTvQM6b5CAMXd8_XCwbFRXCFyRT-J3km_i_QPP3PMGSag34i0F38q15p4XFB=s0-d-e1-ft#https://funderbeam-706056.c.cdn77.org/assets/icon-facebook.png" alt="Facebook icon" class="CToWUd">
                                                                </a>
                                                            </td>
                                                            <td style="padding-left:8px">
                                                                <a style="text-decoration:none" href="#" target="_blank" data-saferedirecturl="#">
                                                                    <img width="20px" height="20px" src="https://ci6.googleusercontent.com/proxy/69URAyjvpFYrVf7At06kR6DpMTXrVHqNr-neePvzSIiiWyFdvaPnqbvytBTZfpnINhcGEoEWWadKvBUriWXxKwt18BKlKS03hwAX6se2Cw=s0-d-e1-ft#https://funderbeam-706056.c.cdn77.org/assets/icon-medium.png" alt="Medium icon" class="CToWUd">
                                                                </a>
                                                            </td>
                                                            <td style="padding-left:8px">
                                                                <a style="text-decoration:none" href="#" target="_blank" data-saferedirecturl="#">
                                                                    <img width="20px" height="20px" src="https://ci6.googleusercontent.com/proxy/43QC1AVLaf3UedgVk0fiw32oV6iokppAofkXgiBk0NFt1q_CiZ6Lq4LYPzDgZ_88dRZP09ePMJ6NYOUDWt9vicgNFK08n60XvwpzaiFfvNc=s0-d-e1-ft#https://funderbeam-706056.c.cdn77.org/assets/icon-youtube.png" alt="Youtube icon" class="CToWUd">
                                                                </a>
                                                            </td>
                                                            <td style="padding-left:8px">
                                                                <a style="text-decoration:none" href="#" target="_blank" data-saferedirecturl="#">
                                                                    <img width="20px" height="20px" src="https://ci6.googleusercontent.com/proxy/JocQPxrYfpEG4kXM4jlEZeqEYjEtlEFb-tBWa73OGL89HvhOyVWCkfotaSDtL2kLGzCLtwy7Lp_4qRg9CGbrGkUMtB8Vd3RlFZfGsLwY-ec=s0-d-e1-ft#https://funderbeam-706056.c.cdn77.org/assets/icon-twitter.png" alt="Twitter icon" class="CToWUd">
                                                                </a>
                                                            </td>
                                                            <td style="padding-left:8px">
                                                                <a style="text-decoration:none" href="#" target="_blank" data-saferedirecturl="#">
                                                                    <img width="20px" height="20px" src="https://ci3.googleusercontent.com/proxy/a2542OUpCVoUf2WSpRROYMG7L80TZV5TtMk4dqnbnCFs1cfSs5Q_rAZEnav8EzfZr2jZGKLxm_9G2hungWXkQUvQrycsKGLs1p6ZxzzaEsOV=s0-d-e1-ft#https://funderbeam-706056.c.cdn77.org/assets/icon-linkedin.png" alt="LinkedIn icon" class="CToWUd">
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td>
                                        <p><a style="font-size:14px;font-weight:300;text-decoration:none;color:#072360;margin:16px auto 16px auto" href="https://nasdng.com/" target="_blank" data-saferedirecturl="https://nasdng.com/">www.nasdng.com</a></p>
                                    </td>
                                </tr>
                                
                               
                                
                                <tr>
                                    <td style="border-top:1px solid #cdced2">
                                        <p style="font-size:12px;color:#6c6f7a;margin-top:40px">
                                        You are receiving this email from NASD Plc because you have registered on  NASDFundy -<br/> the Crowd Funding & Investing Portal of the NASD OTC Securities Exchange or otherwise related services.
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        
        <img src="https://ci4.googleusercontent.com/proxy/_8zm6Cxd7tjpdAhIqccSYYmJqPCE3YEVE3phe0uxcXetgp39rgH_EIejnhY8VrY6r4DU581NHM7CWjAB-uKHtrQDEr-6TppwBlwff3tAdkjFmxlXZl2hwlusPp0jmcLb-8r7XhMajL78tuO2ARWDgKNkKyaqdhpui_w4RUym-nehVRUaFhLedK96vnF1-7ZvgKqhSU_FdyKWErCTg1Ybs-qpFDM5cLNRYVL3B8cf_KWR-DDWmZTIH0pBeGZg5ySUjvX8RIq9WUZ3AZHQW_e_4pnhsOpY3axjCCto3wGJ62-4aTLP9YcBDJmHtQmWbLnfmRiaR3sXgeNaaRQsfusCsaNGWuDmw1d3w5lGV3YPbPqiOf6UTj-86oxAPf7mxinAF1CFNib3E1uaWGT0Ke_5JE-S052CSoqPHQzYIAbtLkCF1cHQSqYDztXSgUr2SID9sVwbCGD-0vy5o7Bblsx3Mdbo3bxFpDTxGiy3t6SW-PRLAhBAGee0ONpzfIv2CDE2-9uuX4ji1YkL61IET-Fn350QqqWNQT4G1qvl5GOKIEBE__GP4GO3bDgCZ3-MA8o6ijMid8f5LdeHWZsWJF3Xcne9jQg=s0-d-e1-ft#http://url5461.funderbeam.com/wf/open?upn=XjKICczDu8Qh3LA7IP1hpAQloW5TjpM-2F7EgfowHD7CirnzVuumPojY-2B9SPU44Fpj-2FSMMOc-2BfaHmme5hGZ8A7Op4PSV4CSbJtOdUu24i3bfKJ-2B8xua-2BoqRrhGtJAspl9T6sLpH6H2MwEjI8mCJYTmKTTKy3X-2BYnFJBc2nrPdzrF2UU3Iu0Dcs2TIbhW9fk7bQUJQP9LVYXnPuBLcEsgY1uPkk7WmdHG8KuCw7bF8yX8UqiR-2B3j887SCVKOKHnJKtewL3g4yx5JpnfQ5-2FkEO-2FS0n8ND8SUFe20790YgAQ4-2BVq9mWkuf2Bz1UNuY-2FrvsW9QmQd0knAe8VmvEeBYVTsD7snnHOG13XOf6kYfZjhy92Y-3D" alt="" width="1" height="1" border="0" style="height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important" class="CToWUd"></div>
            `
    };
    sgMail.send(emailData).then(sent => console.log("SENT 2 >>>")).catch(err => console.log("ERR 2 >>>", err));

    res.json(`Mail sent ${email2}`);
};


exports.payment = (req, res) => {
    let lastname,
        email2,
        amount,
        refId,
        project

    for (let ingredients of req.ref) {
        email2 = ingredients.userId.email
      amount = ingredients.amount
      refId = ingredients.referenceId
      project = ingredients.projectId.title
    }


    const emailData = {
        to: `${email2}`,
        from: "marketreports@nasdng.com",
        subject: `Payment of ${amount} from ${email2} [${refId}]`,
        html: `
      <div id=":2e7" class="ii gt"><div id=":2e8" class="a3s aXjCH "><u></u>

<div style="width:100%!important;min-width:100%;margin:0;padding:0;background-color:#ffffff">
    
    <table style="border-spacing:0;border-collapse:collapse;vertical-align:top;height:100%;width:100%;table-layout:fixed" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
            <tr style="vertical-align:top">
                <td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top;text-align:center;background-color:#ffffff" align="center" valign="top">
                    <table style="border-spacing:0;border-collapse:collapse;vertical-align:top;background-color:transparent" cellpadding="0" cellspacing="0" align="center" width="100%" border="0">
                        <tbody>
                            <tr style="vertical-align:top">
                                <td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top" width="100%">
                                    
                                    
                                    <table style="border-spacing:0;border-collapse:collapse;vertical-align:top;max-width:500px;margin:0 auto;text-align:inherit" cellpadding="0" cellspacing="0" align="center" width="100%" border="0">
                                        <tbody>
                                            <tr style="vertical-align:top">
                                                <td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top" width="100%">
                                                    <table style="border-spacing:0;border-collapse:collapse;vertical-align:top;width:100%;max-width:500px;color:#000000;background-color:transparent" cellpadding="0" cellspacing="0" width="100%" bgcolor="transparent">
                                                        <tbody>
                                                            <tr style="vertical-align:top">
                                                                <td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top;text-align:center;font-size:0">
                                                                    
                                                                    
                                                                    <div style="display:inline-block;vertical-align:top;width:500px">
                                                                        <table style="border-spacing:0;border-collapse:collapse;vertical-align:top" cellpadding="0" cellspacing="0" align="center" width="100%" border="0">
                                                                            <tbody>
                                                                                <tr style="vertical-align:top">
                                                                                    <td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top;background-color:transparent;padding-top:0;padding-right:0;padding-bottom:30px;padding-left:0;border-top:1px solid #ededed;border-right:1px solid #ededed;border-bottom:1px solid #ededed;border-left:1px solid #ededed">
                                                                                        
                                                                                        <div style="font-size:14px;line-height:17px;text-align:center;color:white;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding-top:15px;padding-right:10px;padding-bottom:15px;padding-left:10px;background:#f05050">
                                                                                            <p style="margin:0;font-size:14px;line-height:17px;text-align:center">This is a test payment. No real money was paid by you.</p>
                                                                                        </div>
                                                                                        
                                                                                        <table style="border-spacing:0;border-collapse:collapse;vertical-align:top;background:url('https://ci3.googleusercontent.com/proxy/Hai9ZcQtT7UHCMMgI7MfB4kRzgHFeJ8dUJ7uGB5B_R2Bug734CwTYmCd_u8LM2Yp_jGmqXXqUN1BpI7Utcd_m1iLSi7vJF7wHclr494qiKXfw_q0=s0-d-e1-ft#https://s3-eu-west-1.amazonaws.com/pstk-public-files/confetti.png') repeat" cellpadding="0" cellspacing="0" width="100%">
                                                                                            <tbody>
                                                                                                <tr style="vertical-align:top">
                                                                                                    <td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top;padding-top:40px;padding-right:10px;padding-bottom:0px;padding-left:10px">
                                                                                                        <div style="color:#fdfffe;line-height:150%;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                                                                                                            <div style="padding-bottom:40px">
                                                                                                                <p style="margin:0 auto;max-width:300px;font-size:12px;line-height:18px;text-align:center;color:#0d3e65">
                                                                                                                    
                                                                                                                    <span style="font-size:18px;line-height:20px"><a href="mailto:${email2}" target="_blank">${email2}</a></span>
                                                                                                                    
                                                                                                                    <span style="font-size:18px;line-height:20px">you just paid </span>
                                                                                                                </p>
                                                                                                                <p style="margin:0;font-size:14px;line-height:17px;text-align:center;padding-top:10px;color:#0d3e65">
                                                                                                                    <span style="font-size:36px;line-height:43px">
                                                                                                                        <strong>
                                                                                                                            <span style="line-height:43px;font-size:36px">NGN ${amount}</span>
                                                                                                                        </strong>
                                                                                                                    </span>
                                                                                                                    <br>
                                                                                                                </p>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                        <table style="border-spacing:0;border-collapse:collapse;vertical-align:top" cellpadding="0" cellspacing="0" width="100%">
                                                                                            <tbody>
                                                                                                <tr style="vertical-align:top">
                                                                                                    <td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top;padding-top:20px;padding-right:10px;padding-bottom:20px;padding-left:10px">
                                                                                                        <div style="color:#555555;line-height:120%;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                                                                                                            <div style="font-size:14px;line-height:17px;text-align:center;color:#555555;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                                                                                                                <p style="margin:0;font-size:14px;line-height:17px;text-align:center">
                                                                                                                    <strong>
                                                                                                                        <span style="font-size:16px;line-height:19px">Transaction Details</span>
                                                                                                                    </strong>
                                                                                                                    <br>
                                                                                                                </p>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                        <table style="border-spacing:0;border-collapse:collapse;vertical-align:top" cellpadding="0" cellspacing="0" width="100%">
                                                                                            <tbody>
                                                                                                  

                                                                                                <tr style="vertical-align:top">
                                                                                                    <td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top;padding-top:0;padding-right:20px;padding-bottom:0;padding-left:20px">
                                                                                                        <div style="color:#555555;line-height:120%;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                                                                                                            <div style="font-size:14px;line-height:17px;text-align:left;color:#555555;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;border-bottom:solid 1px #ededed;padding-top:15px;padding-right:10px;padding-bottom:15px;padding-left:10px">
                                                                                                                <p style="margin:0;font-size:14px;line-height:17px;text-align:left">Reference&nbsp;
                                                                                                                    <strong style="float:right">${refId}<wbr>gp</strong>
                                                                                                                    <br>
                                                                                                                </p>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>

                                                                                                <tr style="vertical-align:top">
                                                                                                    <td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top;padding-top:0;padding-right:20px;padding-bottom:0;padding-left:20px">
                                                                                                        <div style="color:#555555;line-height:120%;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                                                                                                            <div style="font-size:14px;line-height:17px;text-align:left;color:#555555;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;border-bottom:solid 1px #ededed;padding-top:15px;padding-right:10px;padding-bottom:15px;padding-left:10px">
                                                                                                                <p style="margin:0;font-size:14px;line-height:17px;text-align:left">Date&nbsp;
                                                                                                                    <strong style="float:right">${moment().format('ll')}</strong>
                                                                                                                    <br>
                                                                                                                </p>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>

                                                                                                
                                                                                                
                                                                                                
                                                                                                <tr style="vertical-align:top">
                                                                                                    <td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top;padding-top:0;padding-right:20px;padding-bottom:0;padding-left:20px">
                                                                                                        <div style="color:#555555;line-height:120%;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                                                                                                            <div style="font-size:14px;line-height:17px;text-align:left;color:#555555;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding-top:15px;padding-right:10px;padding-bottom:15px;padding-left:10px">
                                                                                                                <p style="margin:0;font-size:14px;line-height:17px;text-align:left">Project&nbsp;
                                                                                                                    <strong style="float:right">
                                                                                                                        ${project} </strong>
                                                                                                                    <br>
                                                                                                                </p>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                
                                                                                                
                                                                                                
                                                                                            </tbody>
                                                                                        </table>
                                                                                        <table style="border-spacing:0;border-collapse:collapse;vertical-align:top" align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                                                                                            <tbody>
                                                                                                <tr style="vertical-align:top">
                                                                                                    <td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top;padding-top:30px;padding-right:10px;padding-bottom:10px;padding-left:10px" align="center">
                                                                                                        <div style="height:1px">
                                                                                                            <table style="border-spacing:0;border-collapse:collapse;vertical-align:top;border-top:1px solid #d9d9d9;width:20px" align="center" border="0" cellspacing="0">
                                                                                                                <tbody>
                                                                                                                    <tr style="vertical-align:top">
                                                                                                                        <td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top" align="center"></td>
                                                                                                                    </tr>
                                                                                                                </tbody>
                                                                                                            </table>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                        <table style="border-spacing:0;border-collapse:collapse;vertical-align:top" cellpadding="0" cellspacing="0" width="100%">
                                                                                            <tbody>
                                                                                                <tr style="vertical-align:top">
                                                                                                    <td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top;padding-top:20px;padding-right:10px;padding-bottom:20px;padding-left:10px;text-align:center">
                                                                                                        <div style="margin-top:20px;margin-bottom:10px;padding:0px;border:none;outline:none;list-style:none;display:inline;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                                                                                                            <a href="${process.env.EMAIL}/invoice/${refId}" style="font-size:14px;line-height:21px;text-align:center;color:#50a1f7" target="_blank" data-saferedirecturl="${process.env.EMAIL}//invoice/${refId}">View on dashboard</a>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    
                                                                    
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table style="border-spacing:0;border-collapse:collapse;vertical-align:top;background-color:transparent" cellpadding="0" cellspacing="0" align="center" width="100%" border="0">
                        <tbody>
                            <tr style="vertical-align:top">
                                <td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top" width="100%">
                                    
                                    
                                    <table style="border-spacing:0;border-collapse:collapse;vertical-align:top;max-width:500px;margin:0 auto;text-align:inherit" cellpadding="0" cellspacing="0" align="center" width="100%" border="0">
                                        <tbody>
                                            <tr style="vertical-align:top">
                                                <td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top" width="100%">
                                                    <table style="border-spacing:0;border-collapse:collapse;vertical-align:top;width:100%;max-width:500px;color:#000000;background-color:transparent" cellpadding="0" cellspacing="0" width="100%" bgcolor="transparent">
                                                        <tbody>
                                                            <tr style="vertical-align:top">
                                                                <td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top;text-align:center;font-size:0">
                                                                    
                                                                    
                                                                    <div style="display:inline-block;vertical-align:top;width:500px">
                                                                        <table style="border-spacing:0;border-collapse:collapse;vertical-align:top" cellpadding="0" cellspacing="0" align="center" width="100%" border="0">
                                                                            <tbody>
                                                                                <tr style="vertical-align:top">
                                                                                    <td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top;background-color:transparent;padding-top:30px;padding-right:0px;padding-bottom:30px;padding-left:0px;border-top:0px solid transparent;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent">
                                                                                        <table style="border-spacing:0;border-collapse:collapse;vertical-align:top" cellpadding="0" cellspacing="0" width="100%">
                                                                                            <tbody>
                                                                                                <tr style="vertical-align:top">
                                                                                                    <td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px">
                                                                                                        <div style="color:#555555;line-height:120%;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                                                                                                            <div style="font-size:12px;line-height:14px;text-align:center;color:#555555;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                                                                                                                
                                                                                                                    <br>
                                                                                                                </p>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    
                                                                    
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
<img src="https://ci6.googleusercontent.com/proxy/TTCqzIuxaB6k9M0NdDAdr16OkFiWK28nV3jJ3fb_7rzjxm-sTYx3234jCO99PmmpPi08yzrt8TeBweRs4P9mzgY1AvIXwdup9uRp5Ako4hK5vyOW_wl9b8VoXZXbM9dEnjL7JO-4xAU=s0-d-e1-ft#https://mandrillapp.com/track/open.php?u=30661481&amp;id=07e2a52256e54011a9e81e51579d411c" height="1" width="1" class="CToWUd"></div><div class="yj6qo"></div><div class="adL">



</div></div></div>
         `
    };
    sgMail.send(emailData).then(sent => console.log("SENT 2 >>>")).catch(err => console.log("ERR 2 >>>", err));

    res.json(`Mail sent ${email2}`);
};




exports.applicationVerificationProcessingMail = (req, res) => {
    let lastname,
        email2,
        firstname,
        userID;

    for (let ingredients of req.profileByEmail) {
        userID = ingredients._id
        lastname = ingredients.lastname;
        firstname = ingredients.firstname;
        email2 = ingredients.email;
    }



    const emailData = {
        to: `${email2}`,
        from: "marketreports@nasdng.com",
        subject: `Your Verification has been received`,
        html: `
        <div class=""><div class="aHl"></div><div id=":1hj" tabindex="-1"></div><div id=":1gt" class="ii gt"><div id=":1gu" class="a3s aXjCH msg2135453032208332481"><u></u>
        <div style="background-color:#efeff0;font-family:'Montserrat',Arial,Helvetica,sans-serif;color:#072360;font-size:16px;line-height:1.6;padding-top:40px;padding-bottom:40px">
        <table cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;margin-top:40px;margin-right:auto;margin-bottom:40px;margin-left:auto;border-collapse:collapse;border:none">
            <tbody>
                <tr>
                    <td>
                        <div style="border:1px solid #cdced2;background-color:#fff;border-radius:4px">
                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;background-color:#fff;border-radius:4px">
                                <tbody>
                                    
                                    <tr>
                                        <td style="background-color:#072360;padding:24px 30px 24px 30px;border-top-left-radius:4px;border-top-right-radius:4px">
                                        <img src="https://nasdng.com/wp-content/uploads/2019/06/nasdlogo.jpg" alt="" title="" width="146" height="38" class="CToWUd">
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td style="padding:40px 32px 0 32px">
                                            <p style="display:none!important;opacity:0;color:transparent;height:0;width:0">We'll review it within 1 business day and will get back to you.</p>
        
        <p>Hi ${lastname},</p>
        <p>We are reviewing your verification for ${firstname} ${lastname}, and will get back to you within 1 business day with our approval or a request for more information.</p>
        
        <p>While you wait, why not have a look at our how-to guides <a href="#" target="_blank" data-saferedirecturl="#">for investors</a>
            and for <a href="#" target="_blank" data-saferedirecturl="#">raising funds</a>.</p>
        
        <p>Regards,<br>
        <span class="il">NASD</span></p>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>
                                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;margin-bottom:32px">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div style="background-color:#fcdfeb;border-radius:4px;margin:40px 32px 0px 32px">
                                                                <table cellpadding="8px" cellspacing="0" border="0" style="border-collapse:collapse">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <p style="margin:0 8px 0 8px;padding:0;font-size:14px;line-height:1.4">
                                                                                    Investing in early-stage and growth companies puts your capital at risk. Please read our <a style="color:#072360;font-weight:500" href="#" target="_blank" data-saferedirecturl="#">Risk Disclosure Statement.</a>
                                                                                </p>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
                
                <tr>
                    <td>
                        <table cellpadding="0" cellspacing="0" border="0" style="max-width:600px;margin:0 24px 24px 24px;border-collapse:collapse">
                            <tbody>
                                
                                <tr>
                                    <td>
                                        <table cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;margin-top:24px">
                                            <tbody>
                                            <tr>
                                                <td style="width:100%">
                                                    <a href="http://nasdng.com/" target="_blank" data-saferedirecturl="http://nasdng.com/">
                                                        <img width="134px" height="35px" src="https://nasdng.com/wp-content/uploads/2019/06/nasdlogo.jpg"" alt="NASD logo" class="CToWUd">
                                                    </a>
                                                </td>
                                                <td style="vertical-align:bottom">
                                                    
                                                    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse">
                                                        <tbody>
                                                        <tr>
                                                            <td style="padding-left:8px">
                                                                <a style="text-decoration:none" href="#" target="_blank" data-saferedirecturl="#">
                                                                    <img width="20px" height="20px" src="https://ci5.googleusercontent.com/proxy/RejWPV8BkIx5goU7fr8wKuS8Wo1X9hDRt9xXXWXHt1_Q2RtfLTvQM6b5CAMXd8_XCwbFRXCFyRT-J3km_i_QPP3PMGSag34i0F38q15p4XFB=s0-d-e1-ft#https://funderbeam-706056.c.cdn77.org/assets/icon-facebook.png" alt="Facebook icon" class="CToWUd">
                                                                </a>
                                                            </td>
                                                            <td style="padding-left:8px">
                                                                <a style="text-decoration:none" href="#" target="_blank" data-saferedirecturl="#">
                                                                    <img width="20px" height="20px" src="https://ci6.googleusercontent.com/proxy/69URAyjvpFYrVf7At06kR6DpMTXrVHqNr-neePvzSIiiWyFdvaPnqbvytBTZfpnINhcGEoEWWadKvBUriWXxKwt18BKlKS03hwAX6se2Cw=s0-d-e1-ft#https://funderbeam-706056.c.cdn77.org/assets/icon-medium.png" alt="Medium icon" class="CToWUd">
                                                                </a>
                                                            </td>
                                                            <td style="padding-left:8px">
                                                                <a style="text-decoration:none" href="#" target="_blank" data-saferedirecturl="#">
                                                                    <img width="20px" height="20px" src="https://ci6.googleusercontent.com/proxy/43QC1AVLaf3UedgVk0fiw32oV6iokppAofkXgiBk0NFt1q_CiZ6Lq4LYPzDgZ_88dRZP09ePMJ6NYOUDWt9vicgNFK08n60XvwpzaiFfvNc=s0-d-e1-ft#https://funderbeam-706056.c.cdn77.org/assets/icon-youtube.png" alt="Youtube icon" class="CToWUd">
                                                                </a>
                                                            </td>
                                                            <td style="padding-left:8px">
                                                                <a style="text-decoration:none" href="#" target="_blank" data-saferedirecturl="#">
                                                                    <img width="20px" height="20px" src="https://ci6.googleusercontent.com/proxy/JocQPxrYfpEG4kXM4jlEZeqEYjEtlEFb-tBWa73OGL89HvhOyVWCkfotaSDtL2kLGzCLtwy7Lp_4qRg9CGbrGkUMtB8Vd3RlFZfGsLwY-ec=s0-d-e1-ft#https://funderbeam-706056.c.cdn77.org/assets/icon-twitter.png" alt="Twitter icon" class="CToWUd">
                                                                </a>
                                                            </td>
                                                            <td style="padding-left:8px">
                                                            <a style="text-decoration:none" href="#" target="_blank" data-saferedirecturl="#">
                                                            <img width="20px" height="20px" src="https://ci3.googleusercontent.com/proxy/a2542OUpCVoUf2WSpRROYMG7L80TZV5TtMk4dqnbnCFs1cfSs5Q_rAZEnav8EzfZr2jZGKLxm_9G2hungWXkQUvQrycsKGLs1p6ZxzzaEsOV=s0-d-e1-ft#https://funderbeam-706056.c.cdn77.org/assets/icon-linkedin.png" alt="LinkedIn icon" class="CToWUd">
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td>
                                        <p><a style="font-size:14px;font-weight:300;text-decoration:nonhttps://nasdng.com/e;color:#072360;margin:16px auto 16px auto" href="https://nasdng.com/" target="_blank" data-saferedirecturl="https://nasdng.com/">www.<span class="il">nasdng</span>.com</a></p>
                                    </td>
                                </tr>
                                
                               
                                
                                <tr>
                                    <td style="border-top:1px solid #cdced2">
                                    <p style="font-size:12px;color:#6c6f7a;margin-top:40px">
                                    This email is sent to you by NASD OTC Markets in connection with a specific activity you have performed through the platform or otherwise related to the services provided to you. Please note that the information appearing in this email may contain financial promotion approved either by NASD OTC  (authorised and regulated by the SEC Conduct Authority under FRN 794918) or by NASD OTC  (licensed and regulated by the Monetary Authority of Singapore under Capital Markets Services (CMS) license CMS100863).
                                    <br>
                                    Information regarding trading activities is received from the recognised operator of the Marketplace, Funderbeam Markets Pte Ltd in Singapore.
                                    <br>
                                    Please also note that the purpose of this email is to keep you informed and not to provide you any type of advice.
                                </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        

         `
    };
    sgMail.send(emailData).then(sent => console.log("SENT 2 >>>")).catch(err => console.log("ERR 2 >>>", err));

    res.json(`Mail sent ${email2}`);
};



exports.applicationAccept = (req, res) => {
    let lastname,
        email2,
        firstname,
        userID;

    for (let ingredients of req.profileByEmail) {
        userID = ingredients._id
        lastname = ingredients.lastname;
        firstname = ingredients.firstname;
        email2 = ingredients.email;
    }



    const emailData = {
        to: `${email2}`,
        from: "marketreports@nasdng.com",
        subject: `Your Verification has been Approved!`,
        html: `
        <div class=""><div class="aHl"></div><div id=":1hj" tabindex="-1"></div><div id=":1gt" class="ii gt"><div id=":1gu" class="a3s aXjCH msg2135453032208332481"><u></u>
        <div style="background-color:#efeff0;font-family:'Montserrat',Arial,Helvetica,sans-serif;color:#072360;font-size:16px;line-height:1.6;padding-top:40px;padding-bottom:40px">
        <table cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;margin-top:40px;margin-right:auto;margin-bottom:40px;margin-left:auto;border-collapse:collapse;border:none">
            <tbody>
                <tr>
                    <td>
                        <div style="border:1px solid #cdced2;background-color:#fff;border-radius:4px">
                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;background-color:#fff;border-radius:4px">
                                <tbody>
                                    
                                    <tr>
                                        <td style="background-color:#072360;padding:24px 30px 24px 30px;border-top-left-radius:4px;border-top-right-radius:4px">
                                        <img src="https://nasdng.com/wp-content/uploads/2019/06/nasdlogo.jpg" alt="" title="" width="146" height="38" class="CToWUd">
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td style="padding:40px 32px 0 32px">
                                            <p style="display:none!important;opacity:0;color:transparent;height:0;width:0">We'll review it within 1 business day and will get back to you.</p>
        
        <p>Hi ${lastname},</p>
        <p>Your account  for ${firstname} ${lastname} has been verified!
        <br/>
        You can now continue with your registration on the NASD Crowdfunding Portal.</p>
        
        
        
        <p>Regards,<br>
        <span class="il">NASD</span></p>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>
                                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;margin-bottom:32px">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div style="background-color:#fcdfeb;border-radius:4px;margin:40px 32px 0px 32px">
                                                                <table cellpadding="8px" cellspacing="0" border="0" style="border-collapse:collapse">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <p style="margin:0 8px 0 8px;padding:0;font-size:14px;line-height:1.4">
                                                                                    Investing in early-stage and growth companies puts your capital at risk. Please read our <a style="color:#072360;font-weight:500" href="#" target="_blank" data-saferedirecturl="#">Risk Disclosure Statement.</a>
                                                                                </p>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
                
                <tr>
                    <td>
                        <table cellpadding="0" cellspacing="0" border="0" style="max-width:600px;margin:0 24px 24px 24px;border-collapse:collapse">
                            <tbody>
                                
                                <tr>
                                    <td>
                                        <table cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;margin-top:24px">
                                            <tbody>
                                            <tr>
                                                <td style="width:100%">
                                                    <a href="http://nasdng.com/" target="_blank" data-saferedirecturl="http://nasdng.com/">
                                                        <img width="134px" height="35px" src="https://nasdng.com/wp-content/uploads/2019/06/nasdlogo.jpg"" alt="NASD logo" class="CToWUd">
                                                    </a>
                                                </td>
                                                <td style="vertical-align:bottom">
                                                    
                                                    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse">
                                                        <tbody>
                                                        <tr>
                                                            <td style="padding-left:8px">
                                                                <a style="text-decoration:none" href="#" target="_blank" data-saferedirecturl="#">
                                                                    <img width="20px" height="20px" src="https://ci5.googleusercontent.com/proxy/RejWPV8BkIx5goU7fr8wKuS8Wo1X9hDRt9xXXWXHt1_Q2RtfLTvQM6b5CAMXd8_XCwbFRXCFyRT-J3km_i_QPP3PMGSag34i0F38q15p4XFB=s0-d-e1-ft#https://funderbeam-706056.c.cdn77.org/assets/icon-facebook.png" alt="Facebook icon" class="CToWUd">
                                                                </a>
                                                            </td>
                                                            <td style="padding-left:8px">
                                                                <a style="text-decoration:none" href="#" target="_blank" data-saferedirecturl="#">
                                                                    <img width="20px" height="20px" src="https://ci6.googleusercontent.com/proxy/69URAyjvpFYrVf7At06kR6DpMTXrVHqNr-neePvzSIiiWyFdvaPnqbvytBTZfpnINhcGEoEWWadKvBUriWXxKwt18BKlKS03hwAX6se2Cw=s0-d-e1-ft#https://funderbeam-706056.c.cdn77.org/assets/icon-medium.png" alt="Medium icon" class="CToWUd">
                                                                </a>
                                                            </td>
                                                            <td style="padding-left:8px">
                                                                <a style="text-decoration:none" href="#" target="_blank" data-saferedirecturl="#">
                                                                    <img width="20px" height="20px" src="https://ci6.googleusercontent.com/proxy/43QC1AVLaf3UedgVk0fiw32oV6iokppAofkXgiBk0NFt1q_CiZ6Lq4LYPzDgZ_88dRZP09ePMJ6NYOUDWt9vicgNFK08n60XvwpzaiFfvNc=s0-d-e1-ft#https://funderbeam-706056.c.cdn77.org/assets/icon-youtube.png" alt="Youtube icon" class="CToWUd">
                                                                </a>
                                                            </td>
                                                            <td style="padding-left:8px">
                                                                <a style="text-decoration:none" href="#" target="_blank" data-saferedirecturl="#">
                                                                    <img width="20px" height="20px" src="https://ci6.googleusercontent.com/proxy/JocQPxrYfpEG4kXM4jlEZeqEYjEtlEFb-tBWa73OGL89HvhOyVWCkfotaSDtL2kLGzCLtwy7Lp_4qRg9CGbrGkUMtB8Vd3RlFZfGsLwY-ec=s0-d-e1-ft#https://funderbeam-706056.c.cdn77.org/assets/icon-twitter.png" alt="Twitter icon" class="CToWUd">
                                                                </a>
                                                            </td>
                                                            <td style="padding-left:8px">
                                                            <a style="text-decoration:none" href="#" target="_blank" data-saferedirecturl="#">
                                                            <img width="20px" height="20px" src="https://ci3.googleusercontent.com/proxy/a2542OUpCVoUf2WSpRROYMG7L80TZV5TtMk4dqnbnCFs1cfSs5Q_rAZEnav8EzfZr2jZGKLxm_9G2hungWXkQUvQrycsKGLs1p6ZxzzaEsOV=s0-d-e1-ft#https://funderbeam-706056.c.cdn77.org/assets/icon-linkedin.png" alt="LinkedIn icon" class="CToWUd">
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td>
                                        <p><a style="font-size:14px;font-weight:300;text-decoration:nonhttps://nasdng.com/e;color:#072360;margin:16px auto 16px auto" href="https://nasdng.com/" target="_blank" data-saferedirecturl="https://nasdng.com/">www.<span class="il">nasdng</span>.com</a></p>
                                    </td>
                                </tr>
                                
                               
                                
                                <tr>
                                    <td style="border-top:1px solid #cdced2">
                                    <p style="font-size:12px;color:#6c6f7a;margin-top:40px">
                                    This email is sent to you by NASD OTC Markets in connection with a specific activity you have performed through the platform or otherwise related to the services provided to you. Please note that the information appearing in this email may contain financial promotion approved either by NASD OTC  (authorised and regulated by the SEC Conduct Authority under FRN 794918) or by NASD OTC  (licensed and regulated by the Monetary Authority of Singapore under Capital Markets Services (CMS) license CMS100863).
                                    <br>
                                    Information regarding trading activities is received from the recognised operator of the Marketplace, Funderbeam Markets Pte Ltd in Singapore.
                                    <br>
                                    Please also note that the purpose of this email is to keep you informed and not to provide you any type of advice.
                                </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        

         `
    };
    sgMail.send(emailData).then(sent => console.log("SENT 2 >>>")).catch(err => console.log("ERR 2 >>>", err));

    res.json(`Mail sent ${email2}`);
};





exports.applicationDecline = (req, res) => {
    let lastname,
        email2,
        firstname,
        userID;

    for (let ingredients of req.profileByEmail) {
        userID = ingredients._id
        lastname = ingredients.lastname;
        firstname = ingredients.firstname;
        email2 = ingredients.email;
    }



    const emailData = {
        to: `${email2}`,
        from: "marketreports@nasdng.com",
        subject: `Your Verification needs attention`,
        html: `
        <div class=""><div class="aHl"></div><div id=":1hj" tabindex="-1"></div><div id=":1gt" class="ii gt"><div id=":1gu" class="a3s aXjCH msg2135453032208332481"><u></u>
        <div style="background-color:#efeff0;font-family:'Montserrat',Arial,Helvetica,sans-serif;color:#072360;font-size:16px;line-height:1.6;padding-top:40px;padding-bottom:40px">
        <table cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;margin-top:40px;margin-right:auto;margin-bottom:40px;margin-left:auto;border-collapse:collapse;border:none">
            <tbody>
                <tr>
                    <td>
                        <div style="border:1px solid #cdced2;background-color:#fff;border-radius:4px">
                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;background-color:#fff;border-radius:4px">
                                <tbody>
                                    
                                    <tr>
                                        <td style="background-color:#072360;padding:24px 30px 24px 30px;border-top-left-radius:4px;border-top-right-radius:4px">
                                        <img src="https://nasdng.com/wp-content/uploads/2019/06/nasdlogo.jpg" alt="" title="" width="146" height="38" class="CToWUd">
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td style="padding:40px 32px 0 32px">
                                            <p style="display:none!important;opacity:0;color:transparent;height:0;width:0">We'll review it within 1 business day and will get back to you.</p>
        
        <p>Hi ${lastname},</p>
        <p>Unfortunately, your verification for ${lastname} ${firstname} could not be approved at this time. Here's a message from the team:</p>
        
        <div style="border-radius:4px;border:none!important;background-color:#f3f3f4;padding:24px!important;margin:0 0 24px 0!important">
            <p><em style="white-space:pre-line">We have noticed that you haven’t fully completed the required fields. To process this application we require you to;
            - Please upload a copy of your Passport.
          
        </div>
        
        <p>To complete, go to the  <a href="#" target="_blank" data-saferedirecturl="">application</a> to edit it before resubmitting.</p>
        <p>We are a financially regulated business and part of our on-boarding process is the obligatory requirement to complete all the necessary KYC (Know Your Customer) and AML (Anti-Money Laundering) procedures to identify and verify clients.</p>
        <p>Regards,<br/>
        <span class="il">NASD</span></p>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>
                                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;margin-bottom:32px">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div style="background-color:#fcdfeb;border-radius:4px;margin:40px 32px 0px 32px">
                                                                <table cellpadding="8px" cellspacing="0" border="0" style="border-collapse:collapse">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <p style="margin:0 8px 0 8px;padding:0;font-size:14px;line-height:1.4">
                                                                                    Investing in early-stage and growth companies puts your capital at risk. Please read our <a style="color:#072360;font-weight:500" href="#" target="_blank" data-saferedirecturl="#">Risk Disclosure Statement.</a>
                                                                                </p>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
                
                <tr>
                    <td>
                        <table cellpadding="0" cellspacing="0" border="0" style="max-width:600px;margin:0 24px 24px 24px;border-collapse:collapse">
                            <tbody>
                                
                                <tr>
                                    <td>
                                        <table cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;margin-top:24px">
                                            <tbody>
                                            <tr>
                                                <td style="width:100%">
                                                    <a href="http://nasdng.com/" target="_blank" data-saferedirecturl="http://nasdng.com/">
                                                        <img width="134px" height="35px" src="https://nasdng.com/wp-content/uploads/2019/06/nasdlogo.jpg"" alt="NASD logo" class="CToWUd">
                                                    </a>
                                                </td>
                                                <td style="vertical-align:bottom">
                                                    
                                                    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse">
                                                        <tbody>
                                                        <tr>
                                                            <td style="padding-left:8px">
                                                                <a style="text-decoration:none" href="#" target="_blank" data-saferedirecturl="#">
                                                                    <img width="20px" height="20px" src="https://ci5.googleusercontent.com/proxy/RejWPV8BkIx5goU7fr8wKuS8Wo1X9hDRt9xXXWXHt1_Q2RtfLTvQM6b5CAMXd8_XCwbFRXCFyRT-J3km_i_QPP3PMGSag34i0F38q15p4XFB=s0-d-e1-ft#https://funderbeam-706056.c.cdn77.org/assets/icon-facebook.png" alt="Facebook icon" class="CToWUd">
                                                                </a>
                                                            </td>
                                                            <td style="padding-left:8px">
                                                                <a style="text-decoration:none" href="#" target="_blank" data-saferedirecturl="#">
                                                                    <img width="20px" height="20px" src="https://ci6.googleusercontent.com/proxy/69URAyjvpFYrVf7At06kR6DpMTXrVHqNr-neePvzSIiiWyFdvaPnqbvytBTZfpnINhcGEoEWWadKvBUriWXxKwt18BKlKS03hwAX6se2Cw=s0-d-e1-ft#https://funderbeam-706056.c.cdn77.org/assets/icon-medium.png" alt="Medium icon" class="CToWUd">
                                                                </a>
                                                            </td>
                                                            <td style="padding-left:8px">
                                                                <a style="text-decoration:none" href="#" target="_blank" data-saferedirecturl="#">
                                                                    <img width="20px" height="20px" src="https://ci6.googleusercontent.com/proxy/43QC1AVLaf3UedgVk0fiw32oV6iokppAofkXgiBk0NFt1q_CiZ6Lq4LYPzDgZ_88dRZP09ePMJ6NYOUDWt9vicgNFK08n60XvwpzaiFfvNc=s0-d-e1-ft#https://funderbeam-706056.c.cdn77.org/assets/icon-youtube.png" alt="Youtube icon" class="CToWUd">
                                                                </a>
                                                            </td>
                                                            <td style="padding-left:8px">
                                                                <a style="text-decoration:none" href="#" target="_blank" data-saferedirecturl="#">
                                                                    <img width="20px" height="20px" src="https://ci6.googleusercontent.com/proxy/JocQPxrYfpEG4kXM4jlEZeqEYjEtlEFb-tBWa73OGL89HvhOyVWCkfotaSDtL2kLGzCLtwy7Lp_4qRg9CGbrGkUMtB8Vd3RlFZfGsLwY-ec=s0-d-e1-ft#https://funderbeam-706056.c.cdn77.org/assets/icon-twitter.png" alt="Twitter icon" class="CToWUd">
                                                                </a>
                                                            </td>
                                                            <td style="padding-left:8px">
                                                            <a style="text-decoration:none" href="#" target="_blank" data-saferedirecturl="#">
                                                            <img width="20px" height="20px" src="https://ci3.googleusercontent.com/proxy/a2542OUpCVoUf2WSpRROYMG7L80TZV5TtMk4dqnbnCFs1cfSs5Q_rAZEnav8EzfZr2jZGKLxm_9G2hungWXkQUvQrycsKGLs1p6ZxzzaEsOV=s0-d-e1-ft#https://funderbeam-706056.c.cdn77.org/assets/icon-linkedin.png" alt="LinkedIn icon" class="CToWUd">
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td>
                                        <p><a style="font-size:14px;font-weight:300;text-decoration:nonhttps://nasdng.com/e;color:#072360;margin:16px auto 16px auto" href="https://nasdng.com/" target="_blank" data-saferedirecturl="https://nasdng.com/">www.<span class="il">nasdng</span>.com</a></p>
                                    </td>
                                </tr>
                                
                               
                                
                                <tr>
                                    <td style="border-top:1px solid #cdced2">
                                    <p style="font-size:12px;color:#6c6f7a;margin-top:40px">
                                    This email is sent to you by NASD OTC Markets in connection with a specific activity you have performed through the platform or otherwise related to the services provided to you. Please note that the information appearing in this email may contain financial promotion approved either by NASD OTC  (authorised and regulated by the SEC Conduct Authority under FRN 794918) or by NASD OTC  (licensed and regulated by the Monetary Authority of Singapore under Capital Markets Services (CMS) license CMS100863).
                                    <br>
                                    Information regarding trading activities is received from the recognised operator of the Marketplace, Funderbeam Markets Pte Ltd in Singapore.
                                    <br>
                                    Please also note that the purpose of this email is to keep you informed and not to provide you any type of advice.
                                </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        

         `
    };
    sgMail.send(emailData).then(sent => console.log("SENT 2 >>>")).catch(err => console.log("ERR 2 >>>", err));

    res.json(`Mail sent ${email2}`);
};


















