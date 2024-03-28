import styled from "styled-components";

const BarWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  background: alice-blue;
  height: 10px;
  border: 1px solid gray;
  border-radius: 10px;
  align-items: center;
`;

const CompetencyBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.competency}%;
  height: 100%;
  border-radius: 10px 5px 5px 10px;
  background: ${(props) => props.color};
  color: black;
  font-size: 8px;
  padding: 5px 0;
`;

const RemainingBar = styled.div`
  width: calc(100% - ${(props) => props.competency}%);
`;

const SkillCard = (props) => {
  const { title, competency, color, img } = props;
  return (
    <div className="skill-card">
      <div className="skill">
        <img src={img} alt={title} />
      </div>
      <h5 className="h5">{title}</h5>
      {/* <BarWrapper>
        <CompetencyBar color={color} competency={competency}>
          {competency}%
        </CompetencyBar>
        <RemainingBar competency={competency} />
      </BarWrapper> */}
    </div>
  );
};

export default SkillCard;
