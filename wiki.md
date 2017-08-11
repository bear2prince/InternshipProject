# Internship Introduction

## Company
Centre For Internet Safety(CIS). Here is the brief [overview](http://www.canberra.edu.au/cis/aboutcis/) for CIS.

## Project details

### Background
Nowadays, as Internet getting into every corner of people's daily life, Internet
safety is becoming more and more important. This project focuses on automatically
scanning the vulnerability of web applications with AI/machine learning concept.
In traditional way, if a penetration tester wants to get reliable vulnerability
report for a website, he needs to use powerful commercial vulnerability scanners
or manually find an appropriate open source scanner and setting the configuration
correctly which usually costs lots of effort. Besides, for web application developers who want
to find weaknesses of their websites before the first release, the complicate process of
vulnerability scanning makes them discouraged. Therefore, a smart web application
vulnerability scanner which can do scanning work smartly and automatically will
make the life of these people much more easier.

### Project supervisor
- Nigel Phair

### Clients
- key client: Centre For Internet Safety
- potential client: penetration testers and web application developers

### Vision
Combining AI/machine learning concept and open source web application
vulnerability scanners to build a penetration testing tool which can do vulnerability
scanning work automatically and generate more reliable scanning result.

The tool should be easy to use, which can be simply interacted with command line and only accept two parameters, one is the
target website's URL and the other is the path to save the scanning result.

### The benefits to clients
- For CIS

 CIS can use the penetration testing tool freely to do vulnerability scanning work.
- For penetration testers

 The tool can simplify penetration testers' work on choosing vulnerability scanner and
 configuring the correct setting.
- For web application developers

 The tool give web application developers the ability to detect vulnerabilities of their
website before the first release without spending much of their precious developing
time.

### Initial idea about the project
The tool should have three basic functions:
1. automatically analyze the website and collect the information of it(information including web server, language, framework etc)
2. a machine learning system which can select appropriate vulnerability scanner and configure it correctly according to website's information
3. automatically do the vulnerability scanning job and generate a report

### TimeTable
|Week       |Content              |
|-----------|---------------------|
|1 - 4|learn penetration testing & find and learn some open source vulnerability scanners
|5|design the software in detail|
|6 - 8|function 1 build and test|
|9 - 11|function 2 build and test|
|12 - 14|function 3 build and test & final test|

### Deliverables
A prototype will allow for automated penetration-testing, with the (open source) software being pointed a website, where it can register a legitimate account and scan for weaknesses in the profile-editing pages (among other things).

### Developing environment and tools
- Kali Linux: a Debian-derived Linux distribution designed for digital forensics and penetration testing.
- OWASP ZAP: an open-source web application security scanner.
- Arachni: a feature-full, modular, high-performance Ruby framework aimed towards helping penetration testers and administrators evaluate the security of modern web applications.
- Python: a widely used high-level programming language for general-purpose programming.

### Resources and supports
- Supports from my supervisor

 My supervisor, Nigel Phair, is a security expert who knows the technique of penetration testing very well. Besides, he can provide me some one-day host to other security company to learning penetration testing.
- Supports from ANU

 The tutor and classmates can give me many suggestions on technique and project management
during the weekly tutorial on Thursday.

### Constraints
- Lack of knowledge base about penetration testing
- Have no practical experience on building a machine learning system
- Only one person works on this project
- Time to finish this project is 14 weeks(4 weeks on learning and 10 weeks on developing)

### Risks
- The project might not be accomplished within the required time.
- The machine learning might not be that powerful, which would lead to unreliable report.
