var score = 0 ; 
const conversationData = [
    {
        userName: "user",
        userText: "ว้าว ! นี่เป็นหมู่บ้านที่ดีจริง ๆ ดูสงบสุขและเรียบง่ายมากเลยพี่ Theta",
    },
    {
        userName: "Theta",
        userText: "ใช่แล้ว เเละที่สำคัญชาวบ้านที่หมู่บ้าน Newmathcian ตั้งใจทำงานกันมากเลยนะเรามาที่นี้เพื่อช่วยเหลือพวกเขาล่ะ",
    },
    {
        userName: "user",
        userText: "น่าตื่นเต้นจริง ๆ เลยพี่ Theta  ",
    },
    {
        userName: "ชาวบ้าน",
        userText: "อ้าว ! Theta มาได้จังหวะช่วยงานพอดีเลย ช่วงนี้ที่หมู่บ้านกำลังวุ่น ๆ กับการเก็บเกี่ยวพืชผักอยู่ล่ะ",
    },
    {
        userName: "ชาวบ้าน",
        userText: "เอ๊ะ ? แล้วนั่นใครน่ะ",
    },
    {
        userName: "Theta",
        userText: "สวัสดีคุณลุง Theta ขอแนะนำนักผจญภัยที่จะมาช่วยงานในครั้งนี้",
    },
    {
        userName: "user",
        userText: "ข้าพร้อมลุยเสมอ!!!",
    },
    {
        userName: "Theta",
        userText: "คุณลุงมีอะไรให้พวกเราช่วยบ้าง ",
    },
    {
        userName: "ชาวบ้าน",
        userText: "ตอนนี้ชาวบ้านกำลังเก็บผัก ตัดแต่ง และคัดแยกผักกันอยู่ล่ะ",
    },
    {
        userName: "Theta",
        userText: "งั้นเราไปช่วยชาวบ้านวัดขนาดผักเพื่อส่งต่อตลาดดีไหม",
    },
    {
        userName: "user",
        userText: "เยี่ยมไปเลยพี่ Theta  let's go",
    },
];

let currentConversationIndex = 0;

function displayInitialConversation() {
    // Call nextPage() to display the first conversation
    nextPage();
}

// Function to display the next conversation
function nextPage() {
    // Get the next conversation from the conversation data
    const conversation = conversationData[currentConversationIndex];
    // Check if there are more conversations
    if (conversation) {
        // Update the dialog box with the conversation data
        document.getElementById("userName").textContent = conversation.userName;
        document.getElementById("userText").textContent = conversation.userText;
        if(conversation.userName != 'user')
        {
            document.getElementById("userName").style.display = 'block';
        }
        else{
            document.getElementById("userName").style.display = 'none';
        }

        // Display the appropriate character image based on the userName
        const charImages = document.querySelectorAll('.char img');
        charImages.forEach(img => {
            if (img.alt === conversation.userName) {
                img.style.display = 'block';
            } 
            else {
                img.style.display = 'none';
            }
        });
        
        // Increment the conversation index for the next iteration
        currentConversationIndex++;
    } else {
        // เชื่อมกับหน้าหลัก
        score = 50 ; 
        setTimeout(function(){
            window.location.href = "";
        },800);
    }
}


