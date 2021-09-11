import React, { useEffect, useState } from "react";
import "./DiscoverMenu.scss";

const Department = (props) => {
	return <div className="department">{props.department}</div>;
};

const DepartmentList = (props) => {
	return (
		<div className="departments-list">
			{props.departments.map((department) => (
				<div onClick={(e) => props.setSelectedDepartment(department)}>
					<Department department={department} />
				</div>
			))}
		</div>
	);
};

export default DepartmentList;
