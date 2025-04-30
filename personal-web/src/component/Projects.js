function Projects() {
    return (
      <div>
        <h2>Projects</h2>
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Funder's App</h5>
                <p className="card-text">A 4-pics-1-word educational game about Philippine history built with React and Laravel.</p>
                <p><strong>Technologies:</strong> React, PHP, Laravel</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">HRMS for CCDC</h5>
                <p className="card-text">An HR system for employee records, attendance, and payroll management.</p>
                <p><strong>Technologies:</strong> Laravel, MySQL, Bootstrap</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
 
  export default Projects;