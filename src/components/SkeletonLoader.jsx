import { Skeleton } from "antd";
import React from "react";
import styled from "styled-components";

const { Image } = Skeleton;

export default function SkeletonLoader() {
  return (
    <>
      <SkeletonLoading>
        <SkeletonImage active />
        <Skeleton
          active
          paragraph={{
            rows: 3,
          }}
        />
      </SkeletonLoading>

      <SkeletonLoading>
        <SkeletonImage active />
        <Skeleton
          active
          paragraph={{
            rows: 3,
          }}
        />
      </SkeletonLoading>
    </>
  );
}

const SkeletonLoading = styled.div`
  display: flex;
  gap: 16px;
  padding: 8px 0;
  width: 49%;
  margin-top: 16px;

  @media (max-width: 575px) {
    display: block;
    width: 100%;
  }
`;

const SkeletonImage = styled(Image)`
  width: 125px !important;
  height: 125px !important;

  @media (max-width: 575px) {
    width: 100% !important;
    height: 180px !important;
    margin-bottom: 16px;
  }
`;
