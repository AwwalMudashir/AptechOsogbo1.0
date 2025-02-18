import React from 'react'
import './acns.css'

const AcnsOutline = () => {
  return (
    <div className='bg-[#f9da84] p-[2%]'>
      <div className='acns-outline'>
      <h1 className='acns-outline-head pt-[20px] font-bold'>ACNS Course Outline</h1>
      <div className="terms">
        <div className='term mt-[50px] mb-[10px] scroll-element'>
          <h1 className='title'>Term 1</h1>
        <table border="1" className='bordered-table'>
          <tr>
            <th className=''>Module</th>
            <th>Credit Hours</th>
          </tr> 
          <tr>
            <td>Digital Electronics</td>
            <td>32</td>
          </tr>
          <tr>
            <td>Hardware, Networking & Troubleshooting</td>
            <td>36</td>
          </tr>
          <tr>
          <td>Installing and Configuring Operating Systems</td>
          <td>36</td>
          </tr>
          <tr>
          <td>Technologies of Computer Networks</td>
          <td>40</td>
          </tr>
          <tr>
            <td>Emerging Job Areas-SMAC</td>
            <td>8</td>
          </tr>
          <tr>
            <td><b>Total Hours</b></td>
            <td><b>16</b></td>
          </tr>
          <tr>
            <td colSpan={2} className='bg-[white]'>
              Certifications <br />
              CompTIA A+ (Exam-200-1101), CompTIA A+ (Exam-200-1102) and CompTIA
              Network+ (Exam-N10-09)
            </td>
          </tr>
        </table>
        <table className='bordered-table2'>
          <tr>
            <th>Qualifiction</th>
            <td>Aptech Certified Hardware Specialist</td>

          </tr>
          <tr>
            <th>Job Opportunities</th>
            <td>IT Technician</td>
          </tr>
        </table>
        </div>
        <div className="term mt-[50px] mb-[10px] scroll-element">
        <h1 className='title'>Term 2</h1>
        <table border="1" className='bordered-table'>
          <tr>
            <th className=''>Module</th>
            <th>Credit Hours</th>
          </tr>
          <tr>
            <td>Manage Modern Desktops with Windows</td>
            <td>40</td>
          </tr>
          <tr>
            <td>Fundamentals of Red Hat System Administration</td>
            <td>32</td>
          </tr>
          <tr>
          <td>Implementing and Administering Network Solutions</td>
          <td>40</td>
          </tr>
          <tr>
            <td>Cybersecurity Operations Fundamentals</td>
            <td>40</td>
          </tr>
          <tr>
            <td>eProject Administering Network Solutions</td>
            <td>24</td>
          </tr>

          <tr>
            <td><b>Total Hours</b></td>
            <td><b>148</b></td>
          </tr>
          <tr>
          <td colSpan={2}>
            Certifications <br />
            Exam MD-100: Windows 10, Red Hat Certified System Administrator (RHSCA) Exam EX200, CCNA (Exam 200-301) and Cisco Certified CyberOps Assosiate (200-201 CBROPS)
          </td>
          </tr>
        </table>
        <table className='bordered-table2'>
          <tr>
            <th>Qualifiction</th>
            <td>Aptech Certified Network Administrator</td>
          </tr>
          <tr>
            <th>Job Opportunities</th>
            <td>Network Administrator</td>
          </tr>
        </table>
        </div>
        <div className="term mt-[50px] mb-[10px] scroll-element">
        <h1 className='title'>Term 3</h1>
        <table border="1" className='bordered-table'>
          <tr>
            <th className=''>Module</th>
            <th>Credit Hours</th>
          </tr>
          <tr>
            <td>Azure Fundamentals</td>
            <td>36</td>
          </tr>
          <tr>
            <td>Implementing, Managing and Monitoring Azure Environment</td>
            <td>40</td>
          </tr>
          <tr>
          <td>Azure Architect Technologies</td>
          <td>40</td>
          </tr>
          <tr>
            <td>Azure Solutions Architect Design</td>
            <td>40</td>
          </tr>
          <tr>
            <td>Project Azure Administration</td>
            <td>24</td>
          </tr>
          <tr>
            <td><b>Total Hours</b></td>
            <td><b>130</b></td>
          </tr>
          <tr>
            <td colSpan={2}>
              Certifications <br />
              Microsoft Certified: Azure Fundamentals AZ-900, Microfost Certified: Azure Administrator Associate AZ-104, Microsoft Azure Architect Technologies AZ-800, Microsoft Azure Architect Design AZ-801
            </td>
          </tr>
        </table>
        <table className='bordered-table2'>
          <tr>
            <th>Qualifiction</th>
            <td>No Exit Qualification</td>
          </tr>
          <tr>
            <th>Job Opportunities</th>
            <td>Microsoft Azure Administrator</td>
          </tr>
        </table>
        </div>
        <div className="term mt-[50px] mb-[10px] scroll-element">
        <h1 className='title'>Term 4</h1>
        <table border="1" className='bordered-table'>
          <tr>
            <th className=''>Module</th>
            <th>Credit Hours</th>
          </tr>
          <tr>
            <td>Information Security & Organizational Structure</td>
            <td>32</td>
          </tr>
          <tr>
            <td>Implementing and Operating Enterprise Network Core Technologies (ENCOR)</td>
            <td>40</td>
          </tr>
          <tr>
            <td>Implementing Enterprise Advanced Routing and Services (ENARSI)</td>
            <td>40</td>
          </tr>
          <tr>
            <td>Ethical Hacking</td>
            <td>40</td>
          </tr>
          <tr>
            <td>Project Ethical Hacking</td>
            <td>32</td>
          </tr>
          <tr>
            <td><b>Total Hours</b></td>
            <td><b>184</b></td>
          </tr>
          <tr>
            <td colSpan={2}>
              Certifications <br />
              CCNP Enterprise (Core Exam 350-451 ENCOR), CCNP Enterprise (Concentration Exam 300-410 ENARSI), Certified Ethical Hacker CEH v11
            </td>
          </tr>
        </table>
        <table className='bordered-table2'>
          <tr>
            <th>Exit Qualifiction</th>
            <td>Aptech Certified Network Administrator</td>
          </tr>
          <tr>
            <th>Job Opportunities</th>
            <td>
              <ul>
                <li>Network Engineer</li>
                <li>Ethical Hacker</li>
              </ul>
            </td>
          </tr>
        </table>
        </div>      
      </div>
    </div>
    </div>
  )
}

export default AcnsOutline
