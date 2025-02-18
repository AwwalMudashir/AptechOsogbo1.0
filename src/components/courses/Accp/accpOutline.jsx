import React from 'react'
import './accp.css'

const AccpOutline = () => {
  return (
    <div className='bg-[#f9da84] p-[2%] scroll-element'>
      <div className='accp-adv pt-[35px] flex justify-center'>
        <img src={'/accp-advantages.png'} alt="" />
      </div>

    <div className='accp-outline'>
      <h1 className='accp-outline-head pt-[20px] font-bold'>ACCP Course Outline</h1>
      <div className="terms">
        <div className='term mt-[50px] mb-[10px]'>
          <h1 className='title'>Term 1</h1>
        <table border="1" className='accp-bordered-table'>
          <tr>
            <th className=''>Module</th>
            <th>Credit Hours</th>
          </tr>
          <tr>
            <td>Programming Principles and Techiques</td>
            <td>16</td>
          </tr>
          <tr>
            <td>Logic Building and Elementary Programming</td>
            <td>32</td>
          </tr>
          <tr>
          <td>Building Modern Websites</td>
          <td>40</td>
          </tr>
          <tr>
            <td>AngularJS</td>
            <td>16</td>
          </tr>
          <tr>
            <td>eProject Website Development</td>
            <td>2</td>
          </tr>
          <tr>
            <td>UI/UX for Responsive Design</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Object Oriented Programming (OOP) Concepts</td>
            <td>16</td>
          </tr>
          <tr>
            <td>Data Management with SQL Server</td>
            <td>32</td>
          </tr>
          <tr>
            <td><b>Total Hours</b></td>
            <td><b>16</b></td>
          </tr>
        </table>
        <table className='accp-bordered-table2'>
          <tr>
            <th>Exit Qualifiction</th>
            <td>Certificate of Proficiency in Information Systems Management</td>

          </tr>
          <tr>
            <th>Job Opportunities</th>
            <td>Responsive Web Developer, C Programmer</td>
          </tr>
        </table>
        </div>
        <div className="term mt-[50px] mb-[10px]">
        <h1 className='title'>Term 2</h1>
        <table border="1" className='accp-bordered-table'>
          <tr>
            <th className=''>Module</th>
            <th>Credit Hours</th>
          </tr>
          <tr>
            <td>Markup Language and JSON</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Fundamentals of Linux Operating System</td>
            <td>24</td>
          </tr>
          <tr>
          <td>Java Programming I</td>
          <td>32</td>
          </tr>
          <tr>
            <td>Java Programming II</td>
            <td>32</td>
          </tr>
          <tr>
            <td>eProject Java Application Development</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Programming in C#</td>
            <td>40</td>
          </tr>
          <tr>
            <td>Fundamentals of IoT</td>
            <td>6</td>
          </tr>
          <tr>
            <td><b>Total Hours</b></td>
            <td><b>148</b></td>
          </tr>
        </table>
        <table className='accp-bordered-table2'>
          <tr>
            <th>Exit Qualifiction</th>
            <td>Diploma in Information Systems Management</td>
          </tr>
          <tr>
            <th>Job Opportunities</th>
            <td>.NET Application Programmer, Java Application Programmer</td>
          </tr>
        </table>
        </div>
        <div className="term mt-[50px] mb-[10px]">
        <h1 className='title'>Term 3 - Elective A : Java</h1>
        <table border="1" className='accp-bordered-table'>
          <tr>
            <th className=''>Module</th>
            <th>Credit Hours</th>
          </tr>
          <tr>
            <td>Web Component Development using Java</td>
            <td>32</td>
          </tr>
          <tr>
            <td>Integrating Applications with Spring Framework</td>
            <td>16</td>
          </tr>
          <tr>
          <td>Introduction to Dart Programming</td>
          <td>16</td>
          </tr>
          <tr>
            <td>Application Development Using Flutter and Dart</td>
            <td>40</td>
          </tr>
          <tr>
            <td>Agile and DevOps</td>
            <td>24</td>
          </tr>
          <tr>
            <td>eProject Cross-Platform App Development</td>
            <td>2</td>
          </tr>
          <tr>
            <td><b>Total Hours</b></td>
            <td><b>130</b></td>
          </tr>
        </table>
        <table className='accp-bordered-table2'>
          <tr>
            <th>Exit Qualifiction</th>
            <td>No Exit Qualification</td>
          </tr>
          <tr>
            <th>Job Opportunities</th>
            <td>Mobile Application Developer, Java Web Application Developer</td>
          </tr>
        </table>
        </div>
        <div className="term mt-[50px] mb-[10px]">
        <h1 className='title'>Term 3 - Elective B : .NET</h1>
        <table border="1" className='accp-bordered-table'>
          <tr>
            <th className=''>Module</th>
            <th>Credit Hours</th>
          </tr>
          <tr>
            <td>Developing ASP.NET CORE MVC Web Applications</td>
            <td>40</td>
          </tr>
          <tr>
            <td>Introduction to Dart Programming</td>
            <td>16</td>
          </tr>
          <tr>
            <td>Application Development Using Flutter and Dart</td>
            <td>40</td>
          </tr>
          <tr>
            <td>Agile and DevOps</td>
            <td>24</td>
          </tr>
          <tr>
            <td>eProject Cross-Platform App Development</td>
            <td>2</td>
          </tr>
          <tr>
            <td><b>Total Hours</b></td>
            <td><b>122</b></td>
          </tr>
        </table>
        <table className='accp-bordered-table2'>
          <tr>
            <th>Exit Qualifiction</th>
            <td>No Exit Qualification</td>
          </tr>
          <tr>
            <th>Job Opportunities</th>
            <td>Mobile Application Developer, .NET Web Application Developer</td>
          </tr>
        </table>
        </div>
        <div className="term mt-[50px] mb-[10px]">
        <h1 className='title'>Term 4 - Elective A : Open-Source Technologies and Java</h1>
        <table border="1" className='accp-bordered-table'>
          <tr>
            <th className=''>Module</th>
            <th>Credit Hours</th>
          </tr>
          <tr>
            <td>Working with MySQL</td>
            <td>24</td>
          </tr>
          <tr>
            <td>Programming with Python</td>
            <td>36</td>
          </tr>
          <tr>
            <td>Web Application Development Using Python</td>
            <td>40</td>
          </tr>
          <tr>
            <td>eProject (Python Web Application Development)</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Enterprise Application Development using EJB</td>
            <td>36</td>
          </tr>
          <tr>
            <td>Creating Services for the Web</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Software Engineering Principles</td>
            <td>16</td>
          </tr>
          <tr>
            <td>Software Project Management</td>
            <td>36</td>
          </tr>
          <tr>
            <td><b>Total Hours</b></td>
            <td><b>202</b></td>
          </tr>
        </table>
        <table className='accp-bordered-table2'>
          <tr>
            <th>Qualifiction</th>
            <td>Advanced Diploma in Software Engineering</td>
          </tr>
          <tr>
            <th>Job Opportunities</th>
            <td>Python Web Application Developer, Java Enterprise Application Developer</td>
          </tr>
        </table>
        </div>
        <div className="term mt-[50px] mb-[10px]">
        <h1 className='title'>Term 4 - Elective B : Open-Source Technologies and .NET</h1>
        <table border="1" className='accp-bordered-table'>
          <tr>
            <th className=''>Module</th>
            <th>Credit Hours</th>
          </tr>
          <tr>
            <td>Working with MySQL</td>
            <td>24</td>
          </tr>
          <tr>
            <td>Programming with Python</td>
            <td>36</td>
          </tr>
          <tr>
            <td>Web Application Development Using Python</td>
            <td>40</td>
          </tr>
          <tr>
            <td>eProject (Python Web Application Development)</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Development Microsoft Azure and Web Services</td>
            <td>36</td>
          </tr>
          <tr>
            <td>Software Engineering Principles</td>
            <td>16</td>
          </tr>
          <tr>
            <td>Software Project Management</td>
            <td>36</td>
          </tr>
          <tr>
            <td><b>Total Hours</b></td>
            <td><b>190</b></td>
          </tr>
        </table>
        <table className='accp-bordered-table2'>
          <tr>
            <th>Qualifiction</th>
            <td>Advanced Diploma in Software Engineering</td>
          </tr>
          <tr>
            <th>Job Opportunities</th>
            <td>Python Web Application Developer, .NET Enterprise Application Developer</td>
          </tr>
        </table>
        </div>
        <div className="term mt-[50px] mb-[10px]">
        <h1 className='title'>Term 4 - Elective C : Open-Source Technologies and Oracle</h1>
        <table border="1" className='accp-bordered-table'>
          <tr>
            <th className=''>Module</th>
            <th>Credit Hours</th>
          </tr>
          <tr>
            <td>Working with MySQL</td>
            <td>24</td>
          </tr>
          <tr>
            <td>Programming with Python</td>
            <td>36</td>
          </tr>
          <tr>
            <td>Web Application Development Using Python</td>
            <td>40</td>
          </tr>
          <tr>
            <td>eProject (Python Web Application Development)</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Oracle Database SQL</td>
            <td>32</td>
          </tr>
          <tr>
            <td>Program with PL/SQL</td>
            <td>32</td>
          </tr>
          <tr>
            <td>Oracle Database Administration I</td>
            <td>40</td>
          </tr>
          <tr>
            <td>Oracle Database Administration II</td>
            <td>40</td>
          </tr>
          <tr>
            <td><b>Total Hours</b></td>
            <td><b>246</b></td>
          </tr>
        </table>
        <table className='accp-bordered-table2'>
          <tr>
            <th>Qualifiction</th>
            <td>Advanced Diploma in Software Engineering</td>
          </tr>
          <tr>
            <th>Job Opportunities</th>
            <td>Python Web Application Developer, Oracle Database Administrator</td>
          </tr>
        </table>
        </div>
        <div className="term mt-[50px] mb-[10px]">
        <h1 className='title'>Term 4 - Elective D : Open-Source Technologies and Networking</h1>
        <table border="1" className='accp-bordered-table'>
          <tr>
            <th className=''>Module</th>
            <th>Credit Hours</th>
          </tr>
          <tr>
            <td>Working with MySQL</td>
            <td>24</td>
          </tr>
          <tr>
            <td>Programming with Python</td>
            <td>36</td>
          </tr>
          <tr>
            <td>Web Application Development Using Python</td>
            <td>40</td>
          </tr>
          <tr>
            <td>eProject (Python Web Application Development)</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Azure Fundamentals</td>
            <td>32</td>
          </tr>
          <tr>
            <td>Implementing, Managing and Monitoring Azure Environment</td>
            <td>36</td>
          </tr>
          <tr>
            <td>Azure Architect Technologies</td>
            <td>36</td>
          </tr>
          <tr>
            <td>Azure Architect Design</td>
            <td>36</td>
          </tr>
          <tr>
            <td><b>Total Hours</b></td>
            <td><b>242</b></td>
          </tr>
        </table>
        <table className='accp-bordered-table2'>
          <tr>
            <th>Qualifiction</th>
            <td>Advanced Diploma in Software Engineering</td>
          </tr>
          <tr>
            <th>Job Opportunities</th>
            <td>Python Web Application Developer, Windows Server Administrator</td>
          </tr>
        </table>
        </div>
        <div className="term mt-[50px] mb-[10px]">
        <h1 className='title'>Term 4 - Elective E : Data Science</h1>
        <table border="1" className='accp-bordered-table'>
          <tr>
            <th className=''>Module</th>
            <th>Credit Hours</th>
          </tr>
          <tr>
            <td>Programming with Python</td>
            <td>36</td>
          </tr>
          <tr>
            <td>Large Data Managemet with MongoDB</td>
            <td>40</td>
          </tr>
          <tr>
            <td>Emerging Job Areas SMAC (Social, Mobile, Analytics & Cloud)</td>
            <td>8</td>
          </tr>
          <tr>
            <td>R Programming</td>
            <td>40</td>
          </tr>
          <tr>
            <td>Foundation of Big Data (Hadoop MapReduce, Hive, Pig)</td>
            <td>36</td>
          </tr>
          <tr>
            <td>Visual Analytics with Tableau</td>
            <td>40</td>
          </tr>
          <tr>
            <td>Web and Social Media Analytics (Google Analytics and SAS)</td>
            <td>40</td>
          </tr>
          <tr>
            <td>Project Big Data</td>
            <td>2</td>
          </tr>
          <tr>
            <td><b>Total Hours</b></td>
            <td><b>286</b></td>
          </tr>
        </table>
        <table className='accp-bordered-table2'>
          <tr>
            <th>Qualifiction</th>
            <td>Advanced Diploma in Software Engineering</td>
          </tr>
          <tr>
            <th>Job Opportunities</th>
            <td>Data Analytics Professional</td>
          </tr>
        </table>
        </div>
        <div className="term mt-[50px] mb-[10px]">
        <h1 className='title'>Term 4 - Elective F : AI and Machine Learning</h1>
        <table border="1" className='accp-bordered-table'>
          <tr>
            <th className=''>Module</th>
            <th>Credit Hours</th>
          </tr>
          <tr>
            <td>Programming with Python</td>
            <td>36</td>
          </tr>
          <tr>
            <td>Large Data Managemet with MongoDB</td>
            <td>40</td>
          </tr>
          <tr>
            <td>Emerging Job Areas SMAC (Social, Mobile, Analytics & Cloud)</td>
            <td>8</td>
          </tr>
          <tr>
            <td>R Programming</td>
            <td>40</td>
          </tr>
          <tr>
            <td>AI Primer(ML, DL, Neural Networks)</td>
            <td>16</td>
          </tr>
          <tr>
            <td>Natural Language Processing ToolKit</td>
            <td>44</td>
          </tr>
          <tr>
            <td>Machine Learning</td>
            <td>40</td>
          </tr>
          <tr>
            <td>Deep Learning and Machine Learning APIs </td>
            <td>56</td>
          </tr>
          <tr>
            <td>Project Chatbot and Recommendation Engine</td>
            <td>2</td>
          </tr>
          <tr>
            <td><b>Total Hours</b></td>
            <td><b>282</b></td>
          </tr>
        </table>
        <table className='accp-bordered-table2'>
          <tr>
            <th>Qualifiction</th>
            <td>Advanced Diploma in Software Engineering</td>
          </tr>
          <tr>
            <th>Job Opportunities</th>
            <td>Machine Learning Engineer</td>
          </tr>
        </table>
        </div>
        <div className="term mt-[50px] mb-[10px]">
        <h1 className='title'>Term 4 - Elective G : IoT</h1>
        <table border="1" className='accp-bordered-table'>
          <tr>
            <th className=''>Module</th>
            <th>Credit Hours</th>
          </tr>
          <tr>
            <td>Programming with Python</td>
            <td>36</td>
          </tr>
          <tr>
            <td>Large Data Managemet with MongoDB</td>
            <td>40</td>
          </tr>
          <tr>
            <td>Emerging Job Areas SMAC (Social, Mobile, Analytics & Cloud)</td>
            <td>8</td>
          </tr>
          <tr>
            <td>IoT Hardware</td>
            <td>40</td>
          </tr>
          <tr>
            <td>IoT Networking</td>
            <td>16</td>
          </tr>
          <tr>
            <td>Programming the IoT with Python</td>
            <td>40</td>
          </tr>
          <tr>
            <td>Project-IoT</td>
            <td>2</td>
          </tr>
          <tr>
            <td><b>Total Hours</b></td>
            <td><b>182</b></td>
          </tr>
        </table>
        <table className='accp-bordered-table2'>
          <tr>
            <th>Qualifiction</th>
            <td>Advanced Diploma in Software Engineering</td>
          </tr>
          <tr>
            <th>Job Opportunities</th>
            <td>IoT Developer</td>
          </tr>
        </table>
        </div>
      </div>
    </div>

    </div>
  )
}

export default AccpOutline
 