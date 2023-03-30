import React from "react";
import styled from "styled-components";
import { Input, Select, Space, Typography, Grid } from "antd";

const { Search } = Input;
const { Text } = Typography;

export default function Filter({
  data,
  setKeyword,
  setHospitalId,
  setSpecialization,
}) {
  const allHospitals = data.map((item) => item.hospital).flat(1);
  const hospitals = [...new Set(allHospitals.map((item) => item.id))].map(
    (item) => allHospitals.find((element) => element.id === item)
  );

  const allSpecialization = data.map((item) => item.specialization);
  const specialization = [
    ...new Set(allSpecialization.map((item) => item.id)),
  ].map((item) => allSpecialization.find((element) => element.id === item));

  const onSearch = (value) => {
    setKeyword(value);
  };

  const onChangeHospital = (value) => {
    console.log(value);
    setHospitalId(value);
  };

  const onChangeSpecialization = (value) => {
    setSpecialization(value);
  };

  const { xs } = Grid.useBreakpoint();
  return (
    <section>
      <Wrapper>
        <Space direction="vertical">
          <Text strong>Doctor Finder</Text>
          <Space wrap>
            <Search placeholder="Search..." onSearch={onSearch} allowClear />
            <Select
              allowClear
              placeholder="Rumah Sakit"
              style={{
                width: !xs ? 200 : 150,
              }}
              options={hospitals.map(({ id, name }) => ({
                value: id,
                label: name,
              }))}
              onChange={onChangeHospital}
            />

            <Select
              allowClear
              placeholder="Spesialis"
              style={{
                width: !xs ? 200 : 150,
              }}
              options={specialization.map(({ id, name }) => ({
                value: id,
                label: name,
              }))}
              onChange={onChangeSpecialization}
            />
          </Space>
        </Space>
      </Wrapper>
    </section>
  );
}

const Wrapper = styled.div`
  background: var(--white-color);
  padding: 16px;
  border-radius: 8px;
  margin-top: 32px;

  box-shadow: 0px 22px 46px rgba(57, 57, 57, 0.03),
    0px 8.03036px 16.7908px rgba(62, 62, 62, 0.03);
`;
