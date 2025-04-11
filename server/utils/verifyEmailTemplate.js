const verifyEmailTemplate = ({name,url})=>{
    return`
<p>Dear ${name}</p>    
<p>Thank you for registering Blinkit.</p>   
<a href=${url} style="color:black;background :orange;margin-top : 10px,padding:20px,display:block">
    Verify Email
</a>
`
}

export default verifyEmailTemplate


// const verifyEmailTemplate = ({ name, url }) => {
//     return `
//       <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
//         <p style="font-size: 16px;">Dear <strong>${name}</strong>,</p>
        
//         <p style="font-size: 15px; line-height: 1.5;">
//           Thank you for registering with <strong>Blinkit</strong>. We're excited to have you on board!
//         </p>
        
//         <p style="font-size: 15px; line-height: 1.5;">
//           To complete your registration, please verify your email address by clicking the button below:
//         </p>
  
//         <a href="${url}" style="
//           display: inline-block;
//           margin-top: 20px;
//           padding: 12px 24px;
//           background-color: #FFA500;
//           color: white;
//           text-decoration: none;
//           border-radius: 4px;
//           font-weight: bold;
//         ">
//           Verify Email
//         </a>
  
//         <p style="margin-top: 30px; font-size: 13px; color: #777;">
//           If you didn’t create this account, you can safely ignore this email.
//         </p>
//       </div>
//     `;
//   };
  
//   export default verifyEmailTemplate;
  