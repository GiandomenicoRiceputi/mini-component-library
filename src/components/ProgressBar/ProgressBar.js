/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    borderRadius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    borderRadius: 4,
  },
  large: {
    height: 24,
    padding: 4,
    borderRadius: 8,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <>
      <Wrapper
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{
          "--padding": styles.padding + "px",
          "--radius": styles.borderRadius + "px",
        }}
      >
        <BarWrapper>
          <VisuallyHidden>{value}%</VisuallyHidden>
          <Bar
            style={{ "--width": value + "%", "--height": styles.height + "px" }}
          />
        </BarWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  /* Trim off corners when progress bar is near full */
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: 8px;
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
