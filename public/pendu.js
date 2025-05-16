

// start 
let start = document.querySelector('#start');
let rejouer = document.querySelector('#rejouer');
let h3 = document.querySelector('h3');
let gamestart = document.querySelector('#gamestart');

start.addEventListener('click', (event) =>{
    gamestart.style.display = 'flex'
    start.style.display = 'none'
    
})






//  game 


const mots = [
    "PYTHON", "JAVASCRIPT", "CLOUD", "DOCKER", "KUBERNETES", "MICROSERVICES", "DEVOPS", "DATABASE", 
    "GITHUB", "GITLAB", "BITBUCKET", "REACT", "ANGULAR", "VUEJS", "NODEJS", "WEBPACK", "BABEL", 
    "SASS", "LESS", "BOOTSTRAP", "AJAX", "JQUERY", "NODEJS", "EXPRESS", "LARAVEL", "SYMFONY", 
    "FLASK", "DJANGO", "RUBYONRAILS", "PHPSTORM", "INTELLIJ", "VISUALSTUDIO", "ECLIPSE", "ATOM", 
    "SUBLIMETEXT", "VSCODE", "NETBEANS", "PYCHARM", "XCODE", "ANDROID", "IOS", "JAVAFX", "VIRTUALIZATION", 
    "CONTAINERIZATION", "ARCHITECTURE", "COMPUTER", "PROGRAMMING", "ALGORITHMS", "ENCRYPTION", "SECURITY", 
    "FIREWALL", "PROTOCOLS", "PERFORMANCE", "DATABASE", "QUERY", "OPTIMIZATION", "CACHING", "MONITORING", 
    "SERVERLESS", "AUTOMATION", "ANALYTICS", "BIGDATA", "MACHINELEARNING", "ARTIFICIALINTELLIGENCE", 
    "DEEPLEARNING", "SUPERVISED", "UNSUPERVISED", "REGRESSION", "CLASSIFICATION", "PREDICTION", "CLUSTERING", 
    "NEURALNETWORKS", "TENSORFLOW", "PYTORCH", "SCIENCE", "COMPUTING", "OPERATINGSYSTEM", "LINUX", "WINDOWS", 
    "MACOS", "UBUNTU", "DEBIAN", "REDHAT", "CENTOS", "FEDORA", "CISCO", "NVIDIA", "MICROSOFT", "GOOGLE", 
    "AMAZON", "APPLE", "IBM", "SAAS", "PAAS", "IAAS", "FIRMWARE", "HARDWARE", "SOFTWARE", "ROBOTICS", 
    "BLOCKCHAIN", "CRYPTOGRAPHY", "VIRTUALMACHINE", "CONTAINER", "CICD", "VERSIONCONTROL", "TESTING", 
    "DEPLOYMENT", "CLOUDCOMPUTING", "INTERNET", "NETWORKING", "TCPIP", "DNS", "HTTP", "HTTPS", "SSL", 
    "TLS", "IPV6", "IPV4", "BANDWIDTH", "LATENCY", "CONNECTIVITY", "REDUNDANCY", "SCALABILITY", "LOADBALANCING", 
    "PROXIES", "GATEWAY", "ROUTING", "SWITCHING", "BRIDGING", "FLOODING", "SPANNINGTREE", "FIREWALLS", 
    "INTRANET", "EXTRANET", "VPN", "VPNGATEWAY", "REVERSEPROXY", "FORWARDPROXY", "SSLVPN", "AUTOSCALING", 
    "DISASTERRECOVERY", "BACKUP", "STORAGE", "FOLDER", "FILESYSTEM", "HDFS", "NOSQL", "MYSQL", "POSTGRESQL", 
    "MONGODB", "COUCHDB", "CASSANDRA", "REDIS", "MEMCACHED", "SPARK", "HADOOP", "ZFS", "RAID", "REPLICATION", 
    "SHARDING", "INDEXING", "NORMALIZATION", "JOINQUERY", "TRANSACTIONS", "SQLSERVER", "RDBMS", "NOX", "XEN", 
    "KVM", "VAGRANT", "PROXMOX", "HYPERV", "VMWARE", "HYPERVISOR", "CLOUDSERVICE", "CLOUDDEPLOYMENT", 
    "INFASTRUCTURE", "MICROSYSTEM", "MOBILEDEV", "RESPONSIVE", "UIUX", "DESIGNPATTERNS", "SOFTWAREARCHITECTURE", 
    "TESTAUTOMATION", "CONCURRENCY", "SIMULATION", "SIMD", "CLOUDSECURITY", "DISTRIBUTEDSYSTEM", "EVENTDRIVEN", 
    "MICROARCHITECTURE", "PERSISTENCE", "BUSINESSINTELLIGENCE", "DEEPLEARNING", "MACHINEVISION", "SYSTEMDESIGN", 
    "AGILEMETHODS", "SCRUM", "KANBAN", "SCRUMMASTER", "TESTDRIVEN", "QUALITYASSURANCE", "UNITTESTING", 
    "INTEGRATIONTESTING", "FUNCTEST", "ENDTOEND", "REGRESSIONTESTING", "VULNERABILITY", "PENETRATION", 
    "PENETRATIONTESTING", "EXPLOITATION", "MALWARE", "RANSOMWARE", "VIRUS", "TROJANS", "SPAM", "FLOODING", 
    "HACKING", "PHISHING", "SPOOFING", "MITM", "SOC", "FIRMWAREUPDATES", "TROJANHORSE", "BASTIONHOST", 
    "KEYLOGGER", "DDoS", "FLOODING", "DECRYPTION", "ENCRYPTIONKEY", "ASYMMETRICAL", "CERTIFICATE", "TOKEN", 
    "OTPS", "DIGITALSIGNATURE", "USERAUTHENTICATION", "CAPTCHA", "SESSIONMANAGEMENT", "SECURITYPROTOCOLS", 
    "ENCRYPTIONALGORITHMS", "TLSVERSION", "SECUREBROWSER", "EXTRAMEMORY", "EFFICIENT", "RELIABLE", "COMPILE", 
    "DEPLOY", "MONITOR", "ANALYZE", "REPOSITORY", "INTEGRATION", "PROVISION", "CONFIGURATION", "MANAGEMENT", 
    "SCALABLE", "FAULTTOLERANT", "HIGHAVAILABILITY", "MULTITHREADING", "PROCESSOR", "COMPUTERARCHITECTURE", 
    "CLUSTERING", "NUMERICAL", "PERFORMANCE", "MEMORYCACHE", "THREADPOOL", "EXECUTOR", "DISKIO", "GPU", "CPU", 
    "MEMORY", "STORAGEARRAY", "DATASET", "COLLECTION", "DIAGRAM", "SEQUENCE", "PROGRAMMABLE", "COMPILER", 
    "INTERPRETER", "VIRTUALIZATION", "MULTIPLEXING", "SYNCHRONIZATION", "LOGGING", "DEBUGGING", "EXECUTION", 
    "INSTRUCTION", "TASKQUEUE", "STACKTRACE", "HEAP", "BUFFER", "BYTESTREAM", "EXCEPTION", "RUNTIME", "OBJECT", 
    "INSTANCE", "ARRAY", "LIST", "MAP", "TREE", "QUEUE", "GRAPH", "HASHMAP", "ALGORITHM", "SORTING", "SEARCHING", 
    "RECURRENCE", "DYNAMICPROGRAMMING", "RECURSION", "PARALLELPROCESSING", "SIMULTANEOUS", "CLIENTSERVER", 
    "DESKTOPAPPLICATION", "MOBILEAPP", "WEBAPPLICATION", "SOCKET", "ASYNC", "SYNCHRONOUS", "INFORMATION", 
    "COMPRESSION", "DECOMPRESSION", "PROXY", "LAYEREDARCHITECTURE", "STATEFUL", "STATELESS", "SECUREAPI", 
    "WEBSECURITY", "DESIGNSYSTEM", "CONTAINERIZATION", "CLOUDHOSTING", "SERVERDEPLOYMENT", "RUNTIMEENVIRONMENT", 
    "SESSIONID", "MULTIPROCESSING", "LOADBALANCER", "REDUNDANT", "BACKDOOR", "ENDPOINT", "VIRTUALMACHINE", 
    "LATENCY", "BANDWIDTH", "RELIABILITY", "SOCKETPROGRAMMING", "ENCAPSULATION", "INHERITANCE", "ABSTRACTION", 
    "POLYMORPHISM", "COMPOSITION", "ASSOCIATION", "AGGREGATION", "COHESION", "DEPENDENCY", "INTERFACE", 
    "CONTRACT", "IMPLEMENTATION", "DESIGNPATTERNS", "COMPUTERNETWORK", "INTERNETPROTOCOLS", "WEBSECURITY", 
    "SESSIONMANAGEMENT", "VULNERABILITY", "SECURITYALERT", "INFRASTRUCTURE", "PERSISTENCE", "CONCURRENCY", 
    "DATAPROCESSING", "PERFORMANCEOPTIMIZATION", "LOADBALANCING", "ENCODE", "DECODE"
  ]
  let index = Math.floor(Math.random() * mots.length)
  let motCache = mots[index]
  let leMotCache = document.querySelector('#motCache')
  leMotCache.textContent =  `le mot caché est : ${motCache}` 
  console.log(motCache);
  
// const motCache = "INFORMATIQUE"
let motCrepte = "_".repeat(motCache.length)
// console.log(motCrepte);

let affichage = document.querySelector("#affichage")
const result = document.querySelector("#result")
affichage.textContent = motCrepte

// let pendu1 = document.querySelector("#pendu-1")
// let pendu2 = document.querySelector("#pendu-2")
// let pendu3 = document.querySelector("#pendu-3")
// let pendu4 = document.querySelector("#pendu-4")
// let pendu5 = document.querySelector("#pendu-5")
// let pendu6 = document.querySelector("#pendu-6")
// let pendu7 = document.querySelector("#pendu-7")
// let pendu8 = document.querySelector("#pendu-8")
// let pendu9 = document.querySelector("#pendu-9")
// let pendu10 = document.querySelector("#pendu-10")
let pendu = [document.querySelector(".pendu-1"),document.querySelector(".pendu-2"),document.querySelector(".pendu-3"),document.querySelector(".pendu-4"),
    document.querySelector(".pendu-5"),document.querySelector(".pendu-6"),document.querySelector(".pendu-7"),document.querySelector(".pendu-8"),
    document.querySelector(".pendu-9"), document.querySelector(".pendu-10")
]
// console.log(pendu);



let nombreDeMauvaiseReponse = 0
 

 

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const clavier = document.querySelector("#clavier")
let propositionMauvaise = []
function ajouterUnEvenmentSurLeButton(lettre) {
    
    
    lettre.addEventListener('click', clickButton 
)    
}

const clickButton = (evenment)=>{
    // console.log("j'ai click sur le button");
    // console.log(evenment.target.textContent);
    let lettrePropose = evenment.target.textContent 

    // for (const element of motCache) {
    //     if(element == lettrePropose){
    //      console.log();
            
          
            
    //    }   }
    // let motCrepte2 = motCrepte
    let mauvaiseLettre 
    let lettreTrouve = false 
    for (let i = 0; i < motCache.length; i++) {
        if (motCache[i] === lettrePropose) {
            motCrepte[i] = lettrePropose
            // console.log(motCrepte, motCrepte[i]);
            // console.log(lettrePropose);
            motCrepte = motCrepte.substring(0, i) + lettrePropose + motCrepte.substring(i + 1);
            // console.log(motCrepte);
            affichage.textContent = motCrepte
            lettreTrouve =true
       
            
            
            
        }
        
    }
    let allButton = document.querySelectorAll(".disabled")

    if (lettreTrouve == false) {
        mauvaiseLettre = lettrePropose
        propositionMauvaise.push(mauvaiseLettre)
        if (nombreDeMauvaiseReponse < 8) {
             nombreDeMauvaiseReponse++
        pendu[nombreDeMauvaiseReponse].classList.remove("hidden")
        }else{
            nombreDeMauvaiseReponse++
            pendu[nombreDeMauvaiseReponse].classList.remove("hidden")
            result.innerHTML = "YOU LOST"
            h3.style.color = "red"

          
            
            allButton.forEach(oneButton => {
                oneButton.setAttribute("disabled", "true");

                
            });
            document.getElementById("popup1").style.visibility = "visible";
            document.getElementById("popup1").style.opacity = 1;
          
          
          document.querySelector(".close").addEventListener("click", function() {
            document.getElementById("popup1").style.visibility = "hidden";
            document.getElementById("popup1").style.opacity = 0;
          
          });
      

        }
       



        

    }
    if(motCrepte === motCache){
        result.innerHTML = "YOU WEEN"
        h3.style.color = "green"
        allButton.forEach(oneButton => {
            oneButton.setAttribute("disabled", "true");
        });
        document.getElementById("popup1").style.visibility = "visible";
        document.getElementById("popup1").style.opacity = 1;
    }
    evenment.target.setAttribute("disabled","true")


    
    
   
    
    // console.log(propositionMauvaise);
    }



    



for (const car of alphabet) {
    const button = document.createElement("button")
    button.classList.add("disabled")
    button.classList.add("car")
    button.textContent = car 
    clavier.appendChild(button)
    ajouterUnEvenmentSurLeButton(button)




}

rejouer.addEventListener('click', (event)=>{
    index = Math.floor(Math.random() * mots.length)
    motCache = mots[index]
    motCrepte = "_".repeat(motCache.length)
    affichage.textContent = motCrepte
    console.log(motCache);
    let allButton = document.querySelectorAll(".disabled")
    allButton.forEach(oneButton => {
        oneButton.removeAttribute("disabled");
    });
    document.getElementById("popup1").style.visibility = "hidden";
    document.getElementById("popup1").style.opacity = 0;
    pendu.forEach(onePendu => {
        onePendu.classList.add("hidden");

        
    });
    nombreDeMauvaiseReponse = 0
    propositionMauvaise = []
    lettreTrouve = false
    leMotCache.textContent =  `le mot caché est : ${motCache}` 
})



// function testAlphabet(lettre) {
//     if(clickAlphabet(lettre)  ){

//     }
// }

