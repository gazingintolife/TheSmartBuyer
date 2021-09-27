import React, { useEffect, useState } from "react";
import "./DiscoverMenu.scss";

const DepartmentItem = (props) => {
	return (<div className="department">{props?.department}</div>);
};

const DepartmentList = (props) => {
	return (
		<div className="departments-list">
			{props?.departments.map((department) => (
				<div onClick={(e) => props.setSelectedDepartment(department)}>
					<DepartmentItem department={department} />
				</div>
			))}
		</div>
	);
};

export default DepartmentList;
