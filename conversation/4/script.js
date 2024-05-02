var score = 0 ; 
const conversationData = [
    {
        userName: "Theta",
        userText: "ก่อนที่นักผจญภัยจะช่วยชาวบ้านวัดขนาดผัก พี่ Theta ขอทบทวนวิธีการอ่านค่าสเกลหลักและสเกลรองของเวอร์เนียคาลิปเปอร์ ",
    },
    {
        userName: "Theta",
        userText: "ก่อนอื่นให้นักผจญภัยอ่านค่าตัวเลขบนสเกลหลักที่ตรงกับขีดที่ 0 ของสเกลรองหรืออ่านค่าตัวเลขบนสเกลหลักก่อนหน้าขีดที่ 0 ของสเกลรองก็ได้ในกรณีที่สเกลหลักไม่ตรงกับขีดที่ 0 ของสเกลรอง",
    },
    {
        userName: "Theta",
        userText: "ต่อไปให้นักผจญภัยหาตำแหน่งที่ขีดสเกลหลักตรงกับขีดสเกลรองมากที่สุดตำแหน่งแรกเพื่อระบุค่าของสเกลรอง โดยช่องสเกลรอง 1 ช่อง จะมีค่าเท่ากับ 0.05 มิลลิเมตร",
    },
    {
        userName: "Theta",
        userText: "และสุดท้ายให้นักผจญภัยนำค่าที่อ่านได้จากสเกลหลักและสเกลรองมารวมกัน นั่นคือค่าที่ได้จากการวัด",
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


