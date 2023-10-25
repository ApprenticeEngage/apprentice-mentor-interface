import React, { useState } from "react";

type SortOption = "newest" | "oldest" | "publishing_date";

interface CourseSortDropdownProps {
  onSortChange: (selectedSort: SortOption) => void;
}

const CourseSortDropdown: React.FC<CourseSortDropdownProps> = ({
  onSortChange,
}) => {
  const [selectedSort, setSelectedSort] = useState<SortOption>("newest");

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value as SortOption;
    setSelectedSort(selectedValue);
    onSortChange(selectedValue);
  };

  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="sort">Sort By:</label>
      <select
        id="sort"
        value={selectedSort}
        onChange={handleSortChange}
        className="px-2 py-1 border rounded-md focus:outline-none"
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="publishing_date">Publishing Date</option>
      </select>
    </div>
  );
};

export default CourseSortDropdown;
