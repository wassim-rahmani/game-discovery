import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";
import GameCardContainer from "./GameCardContainer";

function GameCardSkeleton() {
  return (
    <Card height="100%">
      <Skeleton>
        <CardBody>
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </CardBody>
      </Skeleton>
    </Card>
  );
}

export default GameCardSkeleton;
