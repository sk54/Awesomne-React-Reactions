import React from 'react';
const About = () => (
    <div className="jumbotron">
        <h1 className="display-3">About page</h1>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target={'#1'}>
            Launch demo modal
        </button>
        <div className="modal fade" id="#1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="1">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        About
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export default About;