const { errorHandler } = require("../helpers/dbErrorHandler");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SDMAILKEY);





exports.mail = (req, res) => {
  let lastname, email2, userID;

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
                                          <p>Hi ${lastname},</p>
      
      <p>thank you for registering at NASDOTC - the crowdinvesting platform.      </p>
      
      <div style="border-radius:4px;border:none!important;background-color:#f3f3f4;padding:24px!important;margin:0 0 24px 0!important">
          <p><em style="white-space:pre-line">To complete your registration, please click on the following link:
          <a href="http://localhost:3001/verification/${userID}" target="_blank" data-saferedirecturl="http://localhost:3001/verification/${userID}">go to the application</a></em></p>
      </div>
    
      <p>  Please do not respond to this email with any questions, instead please contact us direct at marketoperations@nasdng.com</p>
      
     
      
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
      
      <img src="https://ci4.googleusercontent.com/proxy/_8zm6Cxd7tjpdAhIqccSYYmJqPCE3YEVE3phe0uxcXetgp39rgH_EIejnhY8VrY6r4DU581NHM7CWjAB-uKHtrQDEr-6TppwBlwff3tAdkjFmxlXZl2hwlusPp0jmcLb-8r7XhMajL78tuO2ARWDgKNkKyaqdhpui_w4RUym-nehVRUaFhLedK96vnF1-7ZvgKqhSU_FdyKWErCTg1Ybs-qpFDM5cLNRYVL3B8cf_KWR-DDWmZTIH0pBeGZg5ySUjvX8RIq9WUZ3AZHQW_e_4pnhsOpY3axjCCto3wGJ62-4aTLP9YcBDJmHtQmWbLnfmRiaR3sXgeNaaRQsfusCsaNGWuDmw1d3w5lGV3YPbPqiOf6UTj-86oxAPf7mxinAF1CFNib3E1uaWGT0Ke_5JE-S052CSoqPHQzYIAbtLkCF1cHQSqYDztXSgUr2SID9sVwbCGD-0vy5o7Bblsx3Mdbo3bxFpDTxGiy3t6SW-PRLAhBAGee0ONpzfIv2CDE2-9uuX4ji1YkL61IET-Fn350QqqWNQT4G1qvl5GOKIEBE__GP4GO3bDgCZ3-MA8o6ijMid8f5LdeHWZsWJF3Xcne9jQg=s0-d-e1-ft#http://url5461.funderbeam.com/wf/open?upn=XjKICczDu8Qh3LA7IP1hpAQloW5TjpM-2F7EgfowHD7CirnzVuumPojY-2B9SPU44Fpj-2FSMMOc-2BfaHmme5hGZ8A7Op4PSV4CSbJtOdUu24i3bfKJ-2B8xua-2BoqRrhGtJAspl9T6sLpH6H2MwEjI8mCJYTmKTTKy3X-2BYnFJBc2nrPdzrF2UU3Iu0Dcs2TIbhW9fk7bQUJQP9LVYXnPuBLcEsgY1uPkk7WmdHG8KuCw7bF8yX8UqiR-2B3j887SCVKOKHnJKtewL3g4yx5JpnfQ5-2FkEO-2FS0n8ND8SUFe20790YgAQ4-2BVq9mWkuf2Bz1UNuY-2FrvsW9QmQd0knAe8VmvEeBYVTsD7snnHOG13XOf6kYfZjhy92Y-3D" alt="" width="1" height="1" border="0" style="height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important" class="CToWUd"></div>
          `
  };
  sgMail
    .send(emailData)
    .then(sent => console.log("SENT 2 >>>"))
    .catch(err => console.log("ERR 2 >>>", err));

  res.json(`Mail sent ${email2}`);
};




exports.passwordReset = (req, res) => {
    let lastname, email2, userID;
  
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
            <a href="http://localhost:3001/password/reset/${userID}" target="_blank" data-saferedirecturl="http://localhost:3001/password/reset/${userID}">go to password reset</a></em></p>
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
        
        <img src="https://ci4.googleusercontent.com/proxy/_8zm6Cxd7tjpdAhIqccSYYmJqPCE3YEVE3phe0uxcXetgp39rgH_EIejnhY8VrY6r4DU581NHM7CWjAB-uKHtrQDEr-6TppwBlwff3tAdkjFmxlXZl2hwlusPp0jmcLb-8r7XhMajL78tuO2ARWDgKNkKyaqdhpui_w4RUym-nehVRUaFhLedK96vnF1-7ZvgKqhSU_FdyKWErCTg1Ybs-qpFDM5cLNRYVL3B8cf_KWR-DDWmZTIH0pBeGZg5ySUjvX8RIq9WUZ3AZHQW_e_4pnhsOpY3axjCCto3wGJ62-4aTLP9YcBDJmHtQmWbLnfmRiaR3sXgeNaaRQsfusCsaNGWuDmw1d3w5lGV3YPbPqiOf6UTj-86oxAPf7mxinAF1CFNib3E1uaWGT0Ke_5JE-S052CSoqPHQzYIAbtLkCF1cHQSqYDztXSgUr2SID9sVwbCGD-0vy5o7Bblsx3Mdbo3bxFpDTxGiy3t6SW-PRLAhBAGee0ONpzfIv2CDE2-9uuX4ji1YkL61IET-Fn350QqqWNQT4G1qvl5GOKIEBE__GP4GO3bDgCZ3-MA8o6ijMid8f5LdeHWZsWJF3Xcne9jQg=s0-d-e1-ft#http://url5461.funderbeam.com/wf/open?upn=XjKICczDu8Qh3LA7IP1hpAQloW5TjpM-2F7EgfowHD7CirnzVuumPojY-2B9SPU44Fpj-2FSMMOc-2BfaHmme5hGZ8A7Op4PSV4CSbJtOdUu24i3bfKJ-2B8xua-2BoqRrhGtJAspl9T6sLpH6H2MwEjI8mCJYTmKTTKy3X-2BYnFJBc2nrPdzrF2UU3Iu0Dcs2TIbhW9fk7bQUJQP9LVYXnPuBLcEsgY1uPkk7WmdHG8KuCw7bF8yX8UqiR-2B3j887SCVKOKHnJKtewL3g4yx5JpnfQ5-2FkEO-2FS0n8ND8SUFe20790YgAQ4-2BVq9mWkuf2Bz1UNuY-2FrvsW9QmQd0knAe8VmvEeBYVTsD7snnHOG13XOf6kYfZjhy92Y-3D" alt="" width="1" height="1" border="0" style="height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important" class="CToWUd"></div>
            `
    };
    sgMail
      .send(emailData)
      .then(sent => console.log("SENT 2 >>>"))
      .catch(err => console.log("ERR 2 >>>", err));
  
    res.json(`Mail sent ${email2}`);
  };
