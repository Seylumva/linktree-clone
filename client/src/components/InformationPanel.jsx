import { SocialForm, BasicInfoForm, TabPanel } from ".";

const InformationPanel = ({ selectedTab }) => {
  return (
    <TabPanel value={selectedTab} index={0}>
      <div className="space-y-5">
        <BasicInfoForm />
        <SocialForm />
      </div>
    </TabPanel>
  );
};

export default InformationPanel;
