function generateRandomWord() {
    var title = ["Barangay Management Information System", "Indoor Air Quality Monitoring System", "E-Voting System", "School Portal", "Inventory Management System"];
    var description = 
[
    "A Barangay Management System is a software application designed to help manage the administrative tasks of a barangay, the smallest administrative division in the Philippines. It automates and streamlines daily operations, making it easier for officials to manage records, generate reports, and perform tasks efficiently. Features may include modules for basic information management, resident records, financial transactions, project tracking, and disaster preparedness. The system can save time and effort in managing day-to-day tasks, improving efficiency and productivity for barangay officials.", 
    "A indoor air quality monitoring system is a device or system that measures and tracks various factors that affect the air quality indoors. These factors may include temperature, humidity, carbon dioxide levels, and air pollutants. The system is designed to provide real-time information to help maintain healthy and safe indoor environments for occupants.",
    "E-voting system is an electronic voting system that allows voters to cast their votes remotely using a computer or mobile device. The system is designed to improve the accuracy, security, and efficiency of the voting process. It can reduce the time and costs associated with traditional voting methods while increasing accessibility for voters.",
    "A school portal is a web-based platform designed to provide information and services to students, parents, and teachers. It typically includes features such as course materials, grade tracking, communication tools, and other resources relevant to the academic community.",
    "A inventory management system is a software application designed to help businesses track and manage their inventory levels, orders, and sales. It provides real-time information about stock levels, supplier details, and sales data to help businesses optimize their inventory and supply chain management."
];
    var randomIndex = Math.floor(Math.random() * title.length);
    var randomWord = title[randomIndex];
    var randomDesc = description[randomIndex];
    document.getElementById("output").innerHTML = randomWord;

var fruit = "Barangay Management Information System";

switch (fruit) {
  case "Barangay Management Information System":
    console.log("Description");
    document.getElementById("desc").innerHTML = randomDesc;
    break;
}
}

