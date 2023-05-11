// Define the arrays for each semester
var semester3 = {
    name: "Semester 3",
    subjects: ["ITPC-201: Object Oriented Programming Concepts", "ITPC-203: Data Structures", "ITPC-205: Data Communication and Networking", "ITPC-207: Fundamentals of Database Management Systems", "ITPC-209 Computer System Architecture", "MACI-203: Numerical Methods"],
    labs: ["ITPC-221: Object Oriented Programming Concepts Lab", "ITPC-223: Data Structures Lab ", "ITPC-225: Data Communication and Networking Lab", "ITPC-227: Fundamentals of Database Management Systems Lab"]
  };

var semester4 = {
	name: "Semester 4",
	subjects: ["ITPC-202: Introduction to Design and Analysis of Algorithms","ITPC-204: Operating System Concepts","ITPC-206: Java Programming","ITPC-208: Data Mining and Data Warehousing Concepts","ITPC-210: Formal Language and Automata Theory","HMCI-201: Economics for Engineers"],
	labs: ["ITPC-222: Introduction to Design and Analysis of Algorithms Lab","ITPC-224: Operating System Concepts Lab","ITPC-226: Java Programming Lab","ITPC-228: Data Mining and Data Warehousing Concepts Lab"]
};

var semester5 = {
	name: "Semester 5",
	subjects: ["ITPC-301: Cryptography and Network Security","ITPC-303: Software Engineering Concepts","ITPC-305: Web Design Technologies","ITPC-307: Computer Graphics and Applications","ITPC-309: Discrete Mathematics"],
	labs: ["ITPC-321: Cryptography and Network Security Lab","ITPC-323: Software Engineering Concepts Lab","ITPC-325: Web Design Technologies Lab"," ITPC-327: Computer Graphics and Applications Lab"]
};

var semester6 = {
	name: "Semester 6",
	subjects: ["ITPC-302: Soft Computing Concepts","ITPC-304: Object-Oriented Modeling and Design with UML","ITPC-306: Mobile Application Development","ITPC-308: Machine Learning Concepts"],
	labs: ["ITPC-322: Soft Computing Concepts Lab","ITPC-324: Object-Oriented Modeling and Design with UML Lab","ITPC-326: Mobile Application Development Lab"]
};

var semester7 = {
	name: "Semester 7",
	subjects: ["ITPC-401: Software Testing","ITPC-403: Cloud Computing"],
	labs: ["ITPC-421: Software Testing Lab","ITPC-423: Cloud Computing Lab"]
};

var semester8 = {
	name: "Semester 8",
	subjects: ["ITPC-402: Introduction to System Programming","ITPC-404: E- Commerce","ITPC-406: Decision Support Systems Methodology"],
	labs: ["ITPC-422: Introduction to System Programming Lab",]
};

var open_elec = {
	name: "Open Electives",
	subjects: ["ITOE-001: Fundamentals of Software Engineering","ITOE-002: Web Design Concepts","ITOE-003: Fundamentals of Data Analytics","ITOE-004: Agile Software Engineering","ITOE-005: Mobile Application Development Concepts","ITOE-006: Fundamentals of Cloud Computing"],
	labs: []
};


var dept_elec = {
	name: "Departmental Electives ",
	subjects: ["ITPE-051: Advanced Concepts in Operating System","ITPE-052: Wireless Data Networks","ITPE-053: Information Security System","ITPE-054: Mobile Computing","ITPE-055: Software Project Management Concepts","ITPE-056: Agile Software Development","ITPE-057: Principles of Compiler Design","ITPE-058: Principles of Programming Languages","ITPE-059: Data Analytics","ITPE-060: Digital Image Processing","ITPE-061: Multicore Programming","ITPE-062: Cyber Forensic","ITPE-063: Artificial Intelligence Concepts","ITPE-064: Internet of Things (IoT) Concepts"],
	labs: []
};

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const semester_no = urlParams.get('semester');
function go_to_sem (semester_no) {
	// Get the value of the semester variable
	var semester = semester_no;
	// Get the appropriate array based on the semester value
	var subjectsArray = [];
	var labsArray = [];
	switch (semester) {
		case 'semester-3':
            sem_name = semester3.name
			subjectsArray = semester3.subjects;
			labsArray = semester3.labs;
			break;
		case 'semester-4':
            sem_name = semester4.name
			subjectsArray = semester4.subjects;
			labsArray = semester4.labs;
			break;
        case 'semester-5':
            sem_name = semester5.name
			subjectsArray = semester5.subjects;
			labsArray = semester5.labs;
			break;
		case 'semester-6':
            sem_name = semester6.name
			subjectsArray = semester6.subjects;
			labsArray = semester6.labs;
			break;
		case 'semester-7':
            sem_name = semester7.name
			subjectsArray = semester7.subjects;
			labsArray = semester7.labs;
			break;
		case 'semester-8':
            sem_name = semester8.name
			subjectsArray = semester8.subjects;
			labsArray = semester8.labs;
			break;
		case 'open-electives':
            sem_name = open_elec.name
			subjectsArray = open_elec.subjects;
			labsArray = open_elec.labs;
			break;
		case 'departmental-electives':
            sem_name = dept_elec.name
			subjectsArray = dept_elec.subjects;
			labsArray = dept_elec.labs;
			break;
		default:
			alert('Invalid semester value');
			return;
	}
	
    document.getElementById("semester_name").innerHTML=sem_name;
	
    // loop through the subjectsList and append the "Subjects" div for each subject
    for (var i = 0; i < subjectsArray.length; i++) {
        var subject = subjectsArray[i];
        var subjectDiv = document.createElement("div");
        subjectDiv.className = "row g-4 justify-content-lg-center";
        subjectDiv.innerHTML = '<div class="col-lg-10 col-sm-12 wow fadeInUp" data-wow-delay="0.3s"><div class="service-item text-left pt-3"><div class="p-1"><h5 class="mb-3 ms-5">' + subject + '</h5></div></div></div>';
        document.getElementById("subjects").appendChild(subjectDiv);
		document.getElementById("subjects").appendChild(document.createElement("br"));
    }

    // loop through the subjectsList and append the "Subjects" div for each subject
    for (var i = 0; i < labsArray.length; i++) {
        var subject = labsArray[i];
        var subjectDiv = document.createElement("div");
        subjectDiv.className = "row g-4 justify-content-lg-center";
        subjectDiv.innerHTML = '<div class="col-lg-10 col-sm-12 wow fadeInUp" data-wow-delay="0.3s"><div class="service-item text-left pt-3"><div class="p-1"><h5 class="mb-3 ms-5">' + subject + '</h5></div></div></div>';
        document.getElementById("lab_subjects").appendChild(subjectDiv);
		document.getElementById("lab_subjects").appendChild(document.createElement("br"))
    }
};

go_to_sem(semester_no);