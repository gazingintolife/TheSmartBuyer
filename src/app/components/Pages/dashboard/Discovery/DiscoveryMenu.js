import React, { useState, useEffect } from "react";
import DepartmentList from "./DepartmentList";
import DiscoveryList from "./DiscoveryList";
import "./DiscoverMenu.scss";

const DiscoveryMenu = () => {
	const [category, setCategory] = useState([
		{
			department: "Department 1",
			categories: ["Category 1", "Category 2"],
		},
		{
			department: "Department 2",
			categories: ["Category 3", "Category 4"],
		},
	]);

	const departments = category.map((x) => x.department);

	const [selectedDepartment, setSelectedDepartment] =
		useState("Department 1");
	const [selectedCategories, setselectedCategories] = useState();

	// useEffect(() => {
	// 	fetch("/api/getMenuItems", { method: "GET" })
	// 		.then((res) => {
	// 			if (res.ok) {
	// 				return res.json();
	// 			} else {
	// 				throw new Error("Something went wrong");
	// 			}
	// 		})
	// 		.then((json) => {
	// 			setCategory(...json);
	// 		});
	// }, []);

	useEffect(() => {
		const x = category.find((obj) => obj.department === selectedDepartment);
		setselectedCategories(x?.categories);
	}, [selectedDepartment]);

	return (
		<div>
			<DepartmentList
				departments={departments}
				setSelectedDepartment={setSelectedDepartment}
			/>
			<DiscoveryList category={selectedCategories} />
		</div>
	);
};

export default DiscoveryMenu;
