import React, { useState } from 'react';
import './ResumeBuilder.scss'
import dustbinSvg from '../images/dustbin.svg'

function ResumeBuilder() {


    const [educations, setEducations] = useState([{ class: '', marks: '', school: '' }]);

    const handleAddEducation = () => {
        setEducations([...educations, { class: '', marks: '', school: '' }]);
    };

    const handleRemoveEducation = (index) => {
        const updatedEducations = [...educations];
        updatedEducations.splice(index, 1);
        setEducations(updatedEducations);
    };

    const handleEducationChange = (index, key, value) => {
        const updatedEducations = [...educations];
        updatedEducations[index][key] = value;
        setEducations(updatedEducations);
    };

    return (
        <div className='resume-builder'>

            <h3 className='title'>Basic Details</h3>

            <div className="resume-builder-row">
                <div class="row mb-3">
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name" />
                </div>
                <div class="row mb-3">
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
            </div>

            <div className="resume-builder-row">
                <div class="row mb-3">
                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="primary contact" />
                </div>
                <div class="row mb-3">
                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="secondary contact" />
                </div>
            </div>

            <div className="resume-builder-row">
                <div class="row mb-3">
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="designation" />
                </div>
                <div class="row mb-3">
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="address" />
                </div>
            </div>

            {/* hr tag to seprate */}
            <hr class="border border-primary border-3 opacity-75"></hr>


            {/* education field */}
            <h3 className='title'>Educational Details</h3>

            <div className="resume-builder-column">
                {educations.map((education, index) => (
                    <div className="resume-builder-main" key={index}>
                        <div className="content mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Class"
                                value={education.class}
                                onChange={(e) => handleEducationChange(index, 'class', e.target.value)}
                            />
                        </div>
                        <div className="content mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Marks/CGPA"
                                value={education.marks}
                                onChange={(e) => handleEducationChange(index, 'marks', e.target.value)}
                            />
                        </div>
                        <div className="content mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name of School"
                                value={education.school}
                                onChange={(e) => handleEducationChange(index, 'school', e.target.value)}
                            />
                        </div>
                        <img className='delete-icons' src={dustbinSvg} alt="" onClick={() => handleRemoveEducation(index)} />
                    </div>
                ))}
                <button onClick={handleAddEducation}>Add</button>
            </div>
        </div>
    );
}

export default ResumeBuilder;