import React, { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom"

import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import PlaceIcon from '@mui/icons-material/Place';

import BasicButton from "../../../common/button";
import Loader from "../../../common/loader";
import SocialShare from "../../../common/socialShare";
import baseUrl from "../../../common/baseUrl"
import "./jobDetails.css"

function JobDetails() {

    const { id } = useParams()

    const [isLoading, setIsLoading] = useState(true);
    const [details, setDetails] = useState([]);
    const [otherJobList, setOtherJobList] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/jobs/${id}`)
        .then(response => response.json())
        .then(data => {
            setDetails(data)
            setIsLoading(false)
       })
        .catch(error => console.log(error));

        fetch(`${baseUrl}/jobs`)
        .then(response => response.json())
        .then(data => {
            const newData = data.filter((item)=> item.id != id).slice(0,4)
            setOtherJobList(newData)
        })
        .catch(error => console.log(error));
    },[])



  return (
    <>
    {
        isLoading ? <Loader/>  :
            <div className="container">
                <div className="container-top">
                    <div className="department-heading">
                        {`${details?.department?.title} Department at Teknorix Systems Goa`}
                    </div>
                    <div className="job">
                        <div className="job-title" key={details?.id}>
                            {details?.title}
                        </div>
                        
                        <div className="job-details-section">
                            <div className="job-details">
                                <div className="lable-icon">
                                    <CorporateFareIcon style={{ color: "gray"}}/>
                                    <div className="lable">
                                        {details?.department?.title}
                                    </div>
                                </div>
                                <div className="lable-icon">
                                    <PlaceIcon style={{ color: "gray"}}/>
                                    <div className="lable">
                                        {details?.location?.title}
                                    </div>
                                </div>
                                <div className="lable-icon">
                                    <div className="type">
                                        {details?.type?.toUpperCase()}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="apply-button">
                            <Link to={details?.applyUrl}>
                                <BasicButton variant="contained" title="Apply" className="apply-button"/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="gray-divider"></div>
                <div className="sub-container">
                    <div className="content-section">
                        <div className="details" dangerouslySetInnerHTML={{ __html: details.description }}></div>
                    </div>
                    <div className="others-section">
                        <div className="others-container">
                            <div>
                                <div className="job-title">
                                    {"Other Job Openings".toUpperCase()}
                                </div>
                                <div className="department-underline"></div>
                            </div>
                            <div>
                            {otherJobList.map(item =>
                                {
                                    return( 
                                    <div key={item?.id} className="job">
                                        <div className="other-job-title" key={item?.id}>
                                            {item?.title}
                                        </div>
                                        
                                        <div className="job-details-section">
                                            <div className="job-details">
                                                <div className="lable-icon">
                                                    <CorporateFareIcon style={{ color: "gray"}}/>
                                                    <div className="other-lable">
                                                        {item?.department?.title}
                                                    </div>
                                                </div>
                                                <div className="lable-icon">
                                                    <PlaceIcon style={{ color: "gray"}}/>
                                                    <div className="other-lable">
                                                        {item?.location?.title}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                }

                            )}
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="job-title">
                                    {"Share Job Openings".toUpperCase()}
                                </div>
                                <div className="department-underline"></div>
                            </div>
                            <div>
                                <SocialShare details={details}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    }
    </>
  );
}

export default JobDetails;