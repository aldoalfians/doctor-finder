import React, { useEffect, useState } from "react";
import Filter from "../../components/Filter";
import Card from "../../components/Card";
import { Row } from "antd";
import axios from "axios";
import Constant from "../../utils/constant";

export default function Home() {
  const [specializationId, setSpecializationId] = useState(null);
  const [hospitalId, setHospitalId] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(Constant.BASE_URL);
    setData(data?.data || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <Filter
        data={data}
        setKeyword={setKeyword}
        setHospitalId={setHospitalId}
        setSpecialization={setSpecializationId}
      />
      <Row justify={"space-between"}>
        {data
          ?.filter((item) => {
            if (!hospitalId && !specializationId && !keyword) return true;

            if (keyword)
              return item.name.toLowerCase().includes(keyword?.toLowerCase());

            return (
              item.specialization.id === specializationId ||
              item.hospital.every((item) => item.id === hospitalId)
            );
          })
          .map((item) => (
            <Card
              key={item.doctor_id}
              name={item.name}
              src={item.photo.url}
              hospital={item.hospital[0].name}
              specialization={item.specialization.name}
              about={item.about}
              price={item.price.formatted}
            />
          ))}
      </Row>
    </div>
  );
}
