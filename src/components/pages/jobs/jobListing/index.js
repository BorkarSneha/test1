import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import PlaceIcon from '@mui/icons-material/Place';
import ClearIcon from '@mui/icons-material/Clear';

import BasicButton from "../../../common/button";
import Search from "../../../common/search";
import Dropdown from "../../../common/dropdown";
import Loader from "../../../common/loader";
import baseUrl from "../../../common/baseUrl"
import "./joblisting.css"

function JobListing() {

  const [isLoading, setIsLoading] = useState(true);
  
  const [jobList, setJobList] = useState([]);
  const [departmentList, setDepartmentList] = useState([]);
  const [locationList, setLocationList] = useState([]);
  const [functionList, setFunctionList] = useState([]);

  const [query, setQuery] = useState("")
  const [department, setDepartment] = useState(0)
  const [location, setLocation] = useState(0);
  const [functions, setFunction] = useState(0);

  useEffect(()=>{

    fetch(`${baseUrl}/departments`)
    .then(response => response.json())
    .then(data => {setDepartmentList(data)
   })
    .catch(error => console.log(error));

    fetch(`${baseUrl}/locations`)
    .then(response => response.json())
    .then(data => {setLocationList(data)
   })
    .catch(error => console.log(error));

    fetch(`${baseUrl}/functions`)
    .then(response => response.json())
    .then(data => {setFunctionList(data)
   })
    .catch(error => console.log(error));

  },[])

  useEffect(() => {

    fetch(`${baseUrl}/jobs?q=${query}&dept=${department}&loc=${location}&fun=${functions}`)
    .then(response => response.json())
    .then(data => {
        setJobList(data)
        setIsLoading(false)})
    .catch(error => console.log(error));

  },[query, department, location, functions]);

  const handleChangeDepartment = (e) => {
   setDepartment(e.target.value)
  }

  const handleClearAll = () => {
    setDepartment(0)
    setLocation(0)
    setFunction(0)
  }

  const handleClearDepartment = () => {
    setDepartment(0)
  }

  const handleClearLocation = () => {
    setLocation(0)
  }

  const handleClearFunction = () => {
    setFunction(0)
  }

  return (
    <>
        {isLoading ? <Loader /> :
        <div>
            <div className="filter-main-container">
                <div className="filter-container">
                    <div>
                        <Search type="search" placeholder="Search for Job" onChange={e=> setQuery(e.target.value)}/>
                    </div>
                    <div className="dropdowns">
                        <Dropdown 
                            name="department" 
                            id="department-select" 
                            onChange={handleChangeDepartment} 
                            label="Department" 
                            list={departmentList}
                            />

                        <Dropdown 
                            name="location" 
                            id="location-select" 
                            onChange={e=> setLocation(e.target.value)} 
                            label="Location" 
                            list={locationList}
                            />

                        <Dropdown 
                            name="function" 
                            id="function-select" 
                            onChange={e=> setFunction(e.target.value)} 
                            label="Function" 
                            list={functionList}
                            />
                    </div>
                </div>
                <div className="filter-result-container">
                    <div className="filter-result">
                        <div>{department > 0 && <div className="result-label">
                                                    {departmentList.find((dept)=> dept?.id == department)?.title} 
                                                    <ClearIcon onClick={handleClearDepartment}/>
                                                </div>
                            } 
                        </div>
                        <div>{location > 0 && <div className="result-label">
                                                {locationList.find((loc)=> loc?.id == location)?.title} 
                                                <ClearIcon onClick={handleClearLocation}/>
                                                </div>
                            }
                        </div>
                        <div>{functions > 0 && <div className="result-label">
                                                    {functionList.find((fun)=> fun?.id == functions)?.title} 
                                                    <ClearIcon onClick={handleClearFunction}/>
                                                </div>
                            } 
                        </div>
                    </div>
                    <div className="clear-result">
                        <div onClick={handleClearAll}>
                            Clear All
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {
                jobList.length === 0 ? <img src="/nodata.png"/> :
                departmentList.map((item)=> {
                   return ( 
                   <div key={item?.id}>
                            {jobList.find((job=> job?.department.title == item?.title)) && 
                            <div>
                                <div className="department-title">
                                    {item?.title}
                                </div>
                                <div className="department-underline"></div>
                            </div>
                            }
                        
                            {jobList.filter((job => job?.department.title == item?.title))?.map(item =>
                                {
                                   return( 
                                    <div key={item?.id} className="job">
                                        <div className="job-title" key={item?.id}>
                                            {item?.title}
                                        </div>
                                        <div className="job-details-section">
                                            <div className="job-details">
                                                <div className="lable-icon">
                                                    <CorporateFareIcon style={{ color: "gray"}}/>
                                                    <div className="lable">
                                                        {item?.department?.title}
                                                    </div>
                                                </div>
                                                <div className="lable-icon">
                                                    <PlaceIcon style={{ color: "gray"}}/>
                                                    <div className="lable">
                                                        {item?.location?.title}
                                                    </div>
                                                </div>
                                                <div className="lable-icon">
                                                    <div className="type">
                                                        {item?.type?.toUpperCase()}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="button-section">
                                                <Link to={item?.applyUrl}>
                                                    <BasicButton variant="outlined" title="Apply" />
                                                </Link>
                                                <Link className="link" to={`/jobs/${item?.id}`}>
                                                    View
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                   )
                                }

                            )}
                   </div>
                   )
                }
                )
                }
            </div>
        </div>
        }
    </>
  );
}

export default JobListing;