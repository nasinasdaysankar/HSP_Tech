import React, { useState } from 'react';
import './HspJournalsPage.css'; // We will create this CSS file next

const HspJournalsPage = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <section id="home">
            <h2>Welcome to IJETMS</h2>
            <p>International Journal of Engineering, Technology and Management Sciences published since 2025 (E- is an open access International refereed research publishing journal with a focused aim on promoting and publishing original high-quality research dealing with theoretical and scientific aspects in all disciplines of Engineering, Technology and Management Sciences. IJETMS is an international scientific research journal focusing on issues in Engineering, Technology and Management Sciences. A large number of manuscript inflows, reflects its popularity and the trust of world's research community. IJETMS is indexed with major indexing and abstracting organizations and is published in both electronic and print format.</p>
            <p>All technical or research papers and research results submitted to IJETM should be original in nature, never previously published in any journal or undergoing such process across the globe. All the submissions will be peer-reviewed by the panel of experts associated with IJETM. Submitted papers should meet the internationally accepted criteria and manuscripts should follow the style of the journal for the purpose of both reviewing and editing. Indexing information is found at the indexing and abstracting page of IJETM.</p>
            
            <h3>What do we look for in your Research while conducting blind Peer Review</h3>
            <ol>
              <li><strong>Relevance:</strong> Its contents have to be of use to anyone practicing one of the disciplines addressed by the journal. The paper is relevant to the technical scope of the journal and to the professional interests and activities of its audience. Ideally it should present new knowledge or technology that has the potential to help the reader in their professional work as practicing scientists / engineers.</li>
              <li><strong>Innovation:</strong> It should present new knowledge or technology, or analyze previously known facts in a new way. A paper should present new knowledge or analyze previously known facts in a new way. Additionally, it should take full account of previously published work on its subject.</li>
              <li><strong>Technical Detail:</strong> It should be logically sound, and it should give sufficient detail to allow the reader to replicate the work it describes and to assess its applicability to other environments. The research design, methods, and analyses are adequately defined and clearly described, well integrated, well-reasoned, and appropriate to the aims of the project.</li>
              <li><strong>Presentation and Documentation:</strong> It should present clearly and concisely in the IJETM standard format all relevant data and information to support the conclusions and to indicate their limitations. The text is well written and easy to follow.</li>
              <li><strong>Professional Conduct (Responsibility of Authors):</strong> It must avoid commercialism and plagiarism, and must not have been published previously. There are no commercial references. There are no instances of plagiarism. Ideas and materials of others are correctly attributed.</li>
            </ol>
            <p>All peer review is now based on the above criterion for all submitted manuscripts.</p>
          </section>
        );
      case 'scope':
        return (
          <section id="scope">
            <h2>Scope and Coverage</h2>
            <p>Journal welcomes high quality original research papers in the specialized fields which fall under, the following for review & publication in the monthly volumes/issues:</p>
            <div className="scope-list">
              {[
                'Artificial Intelligence S/W & H/W Architecture', 'Intelligent Systems', 'Software Engineering', 'Internet and Web', 'Expert Systems', 'Computer Simulation', 'Database Systems', 'Bioinformatics', 'Computational Intelligence', 'Programming Languages', 'E-Commerce', 'Wireless Communications', 'Computer Systems', 'Control Systems', 'System Engineering', 'Automata Theory', 'Computability Theory', 'Computational Complexity', 'Concurrency Theory', 'Algorithms', 'Data Structures', 'Operating Systems', 'Computer Communications', 'Information Theory', 'Internet, World Wide Web', 'Wireless Computing', 'Mobile Computing', 'Computer Security', 'Reliability', 'Cryptography', 'Fault-Tolerant Computing', 'Distributed Computing', 'Grid Computing', 'Parallel Computing', 'High-Performance Computing', 'Quantum Computing', 'Computer Graphics', 'Image Processing', 'Scientific Visualization', 'Computational Geometry', 'Software Requirements', 'Software Design', 'Software Testing', 'Software Maintenance', 'ERP Issues', 'Software Configuration', 'Software Processes', 'Software Engineering Tools', 'Software Quality', 'Formal Methods', 'Programming Languages, Programming Paradigms', 'Program Semantics', 'Compilers', 'Concurrent Programming Languages', 'Information Science', 'Database', 'Multimedia, Hypermedia', 'Data Mining', 'Information Retrieval', 'Artificial Intelligence', 'Automated Reasoning', 'Computer Vision', 'Machine Learning', 'Artificial Neural Network', 'Natural Language Processing (Computational Linguistics)', 'Expert Systems', 'Robotics', 'Human-Computer Interaction', 'Scientific Computing', 'Computer-Aided Engineering', 'Finite Element Analysis', 'Computing In Social Sciences', 'Information Systems (Business Informatics)', 'Management Information Systems', 'Health Informatics', 'Computing Theory, Digital Logic', 'Micro Architecture', 'Multiprocessing', 'Cognitive Science', 'Computational', 'Data Transmission', 'Communication Network', 'Network Architecture', 'Network Simulation', 'Cryptography', 'Machine Translation', 'Machine Vision', 'Semantic Web', 'Virtual Reality', '3D Technology', 'Swarm Robotics', 'Programmable Matter', 'Computer Ethics', 'Rugged Computer, Portable Computing', 'Agri-Informatics', 'IT and Education', 'System Simulation', 'VLSI Design', 'Multi-Agent Systems, Pattern Recognition', 'Computing in Technology', 'Computing in Social Sciences', 'Computing in Engineering', 'Computing in Medicine', 'Soft and Hard Computing', 'Computing and Machines,Electronics,Vehicle Adhoc Networks', 'Also we can accept all advanced areas.'
              ].map((item, index) => (
                <span key={index} className="scope-item">{item}</span>
              ))}
            </div>
          </section>
        );
      case 'submit':
        return (
          <section id="submit">
            <h2>Submit Paper</h2>
            <p>For online submission of manuscript/papers, please fill in the following correctly. You will receive the Paper ID and password along with agreement in submission reply. If you are not updated on the Paper ID within two days of submission, please contact at <a href="mailto:editorhspjournal@gmail.com">editorhspjournal@gmail.com</a>. Make sure that the submitted manuscript is not in process of publication anywhere in any conference/journal across the globe.</p>
            <div className="alert-info">
              <p>The review process may take anywhere form fifteen days to two months depending on the response time of reviewers. Authors will be informed by updating the paper status as soon as we receive the evaluation results on the journal website.</p>
            </div>
          </section>
        );
      case 'guidelines':
        return (
          <section id="guidelines">
            <h2>Author Guidelines</h2>
            <h3>Author Guides for Manuscript</h3>
            <ul>
              <li>Evaluation of submitted articles is free of cost but iff submitted manuscript is accepted after double blind peer reviews, the author has to submit open access fee $100 to get the manuscript published with the Journal. There is a discount of USD 50 if an author or co-author is a reviewer for the journal.</li>
              <li>Also make sure that the similarity index of submitted manuscript is below 25% as per IJETMS policy otherwise the paper will be declared as plagiarized immediately after establishing that it violates the policy.</li>
              <li>Journal requires the author to submit a copyright transfer agreement that transfers copyright of the article to the Journal name before publication.</li>
              <li>The published articles are available under server. This license permits use, distribution and reproduction in any medium after formal permission, provided the original work is properly cited, is not changed in any way, and is not used for commercial purposes.</li>
              <li>Authors are free to submit the publsihed work in any non commercial respository or database or listing or profile etc. The work shuld be backlinked or referneced to orginal journal source accordingly and should not the be used for commercial prupsose.</li>
            </ul>
            
            <h3>Manuscript Content Checklist</h3>
            <ol>
              <li>Paper should be rich in content and data.</li>
              <li>Follow a proper well defined research method or approach.</li>
              <li>Should effectively introduce the area and sub areas under investigation.</li>
              <li>Critique available literature on the topic.</li>
              <li>Present a clear research problem derived from literature</li>
              <li>Present a valid detailed solution to the identified problem.</li>
              <li>Develop / Adopt/ Adapt a clear validation method/criteria.</li>
              <li>Follow a proper protocol for validation and should present concrete and decisive evidence in from of research results.</li>
              <li>Discusses and evaluates the results in comparison to literature.</li>
              <li>Provide clear limitation and assumptions to achieve the solution or results presented.</li>
              <li>Provide clear conclusion and deduction based on work carried out and data presented.</li>
              <li>Provide clear Future Research Directions</li>
            </ol>

            <h3>Manuscript Formatting Guidelines</h3>
            <ol>
              <li><strong>TEXT AND TYPE AREA (Margins):</strong> Type area on a page is standard Letter( 8.5'' x 11''). All text should be fully justified. Margins for this type area: top 1.3'', bottom 0.6'; left 1.25, right 1.25.</li>
              <li><strong>TITLES FORMAT:</strong> Paper Title: CAPITAL LETTERS. 16 point type (Times Roman). Author(s): CAPITAL LETTERS, 10 point type (Times Roman).</li>
              <li><strong>TEXT:</strong> Text type should be 10 point Times Roman. Text should be single spaced.</li>
              <li><strong>HEADS / Sub Heads:</strong> Levels of subheads should be easily distinguishable from each other with the use of numbers.</li>
              <li><strong>FIGURES AND TABLES:</strong> Figures and tables may appear printed directly in the text and should be black and white or grayscale.</li>
              <li><strong>REFERENCES:</strong> References text type should be 10 point (Times Roman) at the end of each paper. Vancouver style referencing is accepted.</li>
            </ol>
          </section>
        );
      case 'editorial':
        return (
          <section id="editorial">
            <h2>Editorial Board</h2>
            <h3>Editor in Chief</h3>
            <p>Dr.R.Senthamil Selvan B.E,M.Tech(Communication Systems),M.Tech(CSE),Ph.D,MISTE,FIETE</p>
            <p>Tirupati,Andhra Pradesh,India</p>
            <p><strong>Email:</strong> <a href="mailto:editorhspjournal@gmail.com">editorhspjournal@gmail.com</a></p>
            <p><strong>Contact:</strong> +91-9150450450</p>
          </section>
        );
      case 'indexing':
        return (
          <section id="indexing">
            <h2>Indexing and Abstracting</h2>
            <p>International Journal of Engineering, Technology and Management Sciences is a focused, double blind peer reviewed journal and is Indexed / Abstracted by the following International Agencies and institutions. IJETMS has been regularly published since 2025 and now has a well reputed international standing and invites contributions from researchers, scientists, and practitioners from all over the world.</p>
            <ul className="indexing-list">
              <li>Research Gate</li>
              <li>Google & Google Scholar</li>
              <li>J-Gate</li>
            </ul>
            <p><em>Indexing information is subject to change without prior notice. Published articles shall be available in databases where journal is indexed at time of publication.</em></p>
          </section>
        );
      case 'subscribe':
        return (
          <section id="subscribe">
            <h2>Subscribe to IJETMS</h2>
            <p>Subscription to the International Journal of Engineering, Technology and Management Sciences (IJETMS) shall include all issues published form time to time. Payments are only to be made after approval of the Editorial Office and proper intimation from the journal office.</p>
            <p>We provides all customer service inquiries and handles returns.</p>
            <h3>For further information please contact:</h3>
            <p><strong>Email:</strong> <a href="mailto:editorhspjournal@gmail.com">editorhspjournal@gmail.com</a></p>
            <p><strong>Contact:</strong> +91-9150450450</p>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="journal-page-container">
      <div className="journal-header">
        <h1>International Journal of Engineering, Technology and Management Sciences</h1>
      </div>
      <div className="journal-nav">
        <button onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'active' : ''}>Home</button>
        <button onClick={() => setActiveTab('scope')} className={activeTab === 'scope' ? 'active' : ''}>Scope & Coverage</button>
        <button onClick={() => setActiveTab('submit')} className={activeTab === 'submit' ? 'active' : ''}>Submit Paper</button>
        <button onClick={() => setActiveTab('guidelines')} className={activeTab === 'guidelines' ? 'active' : ''}>Author Guidelines</button>
        <button onClick={() => setActiveTab('editorial')} className={activeTab === 'editorial' ? 'active' : ''}>Editorial Board</button>
        <button onClick={() => setActiveTab('indexing')} className={activeTab === 'indexing' ? 'active' : ''}>Indexing</button>
        <button onClick={() => setActiveTab('subscribe')} className={activeTab === 'subscribe' ? 'active' : ''}>Subscribe</button>
      </div>
      <div className="journal-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default HspJournalsPage;