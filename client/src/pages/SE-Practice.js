import articles from "../dummydata/articles";
import TableStyles from "../components/TableStyle";
import Table from "../components/EvidenceTable";
import TableColumns from "../components/TableColumns";
import Dropdown from "../components/Dropdown";
import { useState } from "react";

const SEPractice = () => {
  const [selectedPractice, setSelectedPractice] = useState("");

  return (
    <div>
      <h2>Select a SE Practice to get evidence for the claimed benefits</h2>
      <Dropdown setSelectedPractice={setSelectedPractice}/>
      <TableStyles>
        <Table selectedPractice={selectedPractice} data={articles} columns={TableColumns} />
      </TableStyles>
    </div>
  );
};

export default SEPractice;