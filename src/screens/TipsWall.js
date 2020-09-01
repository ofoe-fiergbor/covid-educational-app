import React, { Component } from "react";
import { Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import TipsWallTemplate from "../components/TipsWall/TipsWallTemplate";

export default class TipsWall extends Component {
  Tips = [
    {
      id: "1",
      link: 'https://www.cdc.gov/coronavirus/2019-ncov/hcp/clinical-tips-for-healthcare-providers.html',
      title: "Ten Clinical Tips",
      image: require("../img/ten.jpg"),
      details:
        "1.    The National Institutes of Health has developed guidance on treatment external icon, which will be regularly updated as new evidence on the safety and efficacy of drugs and therapeutics emerges from clinical trials and research publications. \n 2.    There is currently no FDA-approved post-exposure prophylaxis for people who may have been exposed to SARS-CoV-2. \n 3.     Non-respiratory symptoms of COVID-19 – such as gastrointestinal symptoms (e.g., nausea, vomiting, diarrhea), or neurologic symptoms (e.g., anosmia, ageusia, headache), or fatigue or body and muscle aches – may appear before fever and lower respiratory tract symptoms (e.g., cough and shortness of breath). \n4.     Children with COVID-19 may have fewer symptoms than adults. Although most children with COVID-19 have not had severe illness, clinicians should maintain a high index of suspicion for SARS-CoV-2 infection in children, particularly infants and children with underlying medical conditions. CDC is investigating multisystem inflammatory syndrome in children, a rare but serious complication associated with COVID-19. CDC recommends monitoring children for worsening of COVID-19 illness. \n5.     CT scans external icon should not be used to screen for COVID-19 or as a first-line test to diagnose COVID-19. CT scans should be used sparingly and reserved for hospitalized, symptomatic patients with specific clinical indications for CT scans.\n 6.     Patients can be infected with more than one virus at the same time. Coinfections with other respiratory viruses in people with COVID-19 have been reported. Therefore, identifying infection with one respiratory virus does not exclude SARS-CoV-2 virus infection. \n 7.      Several patients with COVID-19 have been reported presenting with concurrent community-acquired bacterial pneumoniaexternal icon. Decisions to administer antibiotics to COVID-19 patients should be based on the likelihood of bacterial infection (community-associated  or healthcare-associated), illness severity, and current clinical practice guidelines\n 8.      Clinicians should be aware of the potential for some patients to rapidly deteriorate 1 week after illness onset.\n 9.     The median time to acute respiratory distress syndrome (ARDS) ranges from 8 to 12 days. \n 10.     Lymphopenia, neutrophilia, elevated serum alanine aminotransferase and aspartate aminotransferase levels, elevated lactate dehydrogenase, high CRP, and high ferritin levels may be associated with greater illness severity.",
    },
    {
      id: "2",
      link: 'https://www.cdc.gov/coronavirus/2019-ncov/hcp/pediatric-hcp.html',
      title: "Care for children",
      image: require("../img/children.jpg"),
      details:
        "Symptoms and Severity of COVID-19 in Children\n \nClinical Presentation\n\n The incubation period of SARS-CoV-2 appears to be about the same for children as in adults, at 2-14 days with an average of 6 days.\n\nSigns or symptoms of COVID-19 in children include:\n\n*    Fever\n*    Fatigue\n*    Headache\n*    Cough\n*    Nasal Congestion or rhinorrhea\n*    New Loss of taste or smell\n*    Shortness of breath\n*    Abdominal Pain\n*    Nausea\n*    Poor Appetite\n\nChildren infected with SARS-CoV-2 may have many of these non-specific symptoms, may only have a few (such as only upper respiratory symptoms or only gastrointestinal symptoms), or may be asymptomatic. The most common symptoms in children are cough and/or fever.11-15 A recent systematic review estimated that 16% of children with SARS-CoV-2 infection are asymptomatic,16 but evidence suggests that as many as 45% of pediatric infections are asymptomatic.17 The signs and symptoms of COVID-19 in children are similar to other infections and noninfectious processes, including influenza, streptococcal pharyngitis, and allergic rhinitis. The lack of specificity of signs or symptoms and the significant proportion of asymptomatic infections make symptom-based screening for identification of SARS-CoV-2 in children particularly challenging.        ",
    },
    {
      id: "3",
      link: 'https://www.cdc.gov/coronavirus/2019-ncov/hcp/inpatient-obstetric-healthcare-guidance.html',
      title: "Care for pregnant women",
      image: require("../img/pregnant.jpg"),
      details:
        "Based on what we know at this time, pregnant people might be at an increased risk for severe illness from COVID-19 compared to non-pregnant people. Additionally, there may be an increased risk of adverse pregnancy outcomes, such as preterm birth, among pregnant people with COVID-19.\n\nPre-hospital Considerations\n\n*     Pregnant patients with suspected1 or confirmed COVID-19 should notify the obstetric unit prior to arrival so the facility can make appropriate infection control preparations such as: identifying the most appropriate room for labor and delivery, ensuring infection prevention and control supplies and PPE are correctly positioned, and informing all healthcare personnel who will be involved in the patient’s care of infection control expectations before the patient’s arrival.\n*     If a pregnant patient who has suspected1 or confirmed COVID-19 is arriving via transport by emergency medical services, the driver should contact the receiving emergency department or healthcare facility and follow previously agreed-upon local or regional transport protocols.\n*     Healthcare providers should promptly notify infection control personnel at their facility of the anticipated arrival of a pregnant patient who has suspected1 or confirmed COVID-19.\n\nDuring Hospitalization\n\n*     Pregnant women admitted with suspected1 COVID-19 or who develop symptoms consistent with COVID-19 during admission should be prioritized for testing. Testing of asymptomatic pregnant women is at the discretion of the healthcare provider and facility. Healthcare facilities should ensure recommended infection control practices for hospitalized pregnant patients who have suspected or confirmed COVID-19 are consistent with Interim Infection Prevention and Control Recommendations.\n*     All healthcare facilities that provide obstetric care must ensure that their personnel are correctly trained and capable of implementing recommended infection control interventions, including the use of personal protective equipment. Individual healthcare personnel should ensure they understand and can adhere to infection control requirements.",
    },
    {
      id: "4",
      link: 'https://www.cdc.gov/coronavirus/2019-ncov/hcp/caring-for-newborns.html',
      title: "Care for newborn babies",
      image: require("../img/newborn.jpg"),
      details:
        "Testing recommendations\n\nTesting is recommended for all neonates born to mothers with suspected or confirmed COVID-19, regardless of whether there are signs of infection in the neonate. For neonates presenting with signs of infection suggestive of COVID-19, as described above, providers should also consider alternative diagnoses.\n\nRecommended testing\n\n*     Diagnosis should be confirmed by testing for SARS-CoV-2 RNA by reverse transcription polymerase chain reaction (RT-PCR). Detection of SARS-CoV-2 RNA can be collected using nasopharynx, oropharynx, or nasal swab samples.\n*      Serologic testing is not recommended at this time to diagnose acute infection in neonates.\n\nWhen to test\n\n*     Both symptomatic and asymptomatic neonates born to mothers with suspected or confirmed COVID-19, regardless of mother’s symptoms, should have testing performed at approximately 24 hours of age. If initial test results are negative, or not available, testing should be repeated at 48 hours of age.\n*     For asymptomatic neonates expected to be discharged at <48 hours of age, a single test can be performed prior to discharge, between 24-48 hours of age.\n\nPrioritization of testing\n\n*      In areas with limited testing capacity, testing should be prioritized for neonates with signs suggestive of COVID-19 as well neonates with SARS-CoV-2 exposure requiring higher levels of care or who are expected to have prolonged hospitalizations (>48-72 hours depending on delivery mode).\n\nLimitations and interpretation of testing\n\n*      The optimal timing of testing after birth is unknown. Early testing may lead to false positives (e.g., if the neonate’s nares, nasopharynx and/or oropharynx are contaminated by SARS-CoV-2 RNA in maternal fluids) or false negatives (e.g., RNA may not yet be detectable immediately after exposure following birth).        ",
    },
    {
      id: "5",
      link: 'https://www.cdc.gov/coronavirus/2019-ncov/hcp/care-for-breastfeeding-women.html',
      title: "Care for breastfeeding mothers",
      image: require("../img/breastfeed.jpg"),
      details:
        "Key Points\n\n*     Breast milk is the best source of nutrition for most infants. We do not know whether mothers with COVID-19 can transmit the virus via breast milk, but the limited data available suggest this is not likely.\n*     Whether and how to start or continue breastfeeding should be determined by the mother in coordination with her family and healthcare providers.\n*     A mother with confirmed COVID-19 should be counseled to take precautions to avoid spreading the virus to her infant, including hand washing and wearing a cloth face covering.\n\nThis interim guidance is intended for healthcare providers who care for breastfeeding women and infants who receive breast milk feeds in the context of the coronavirus disease 2019 (COVID-19) pandemic. This interim guidance is based on what is currently known about SARS-CoV-2, the virus that causes COVID-19, and the transmission of other viral respiratory pathogens.\n\nTransmission of SARS-CoV-2 through breast milk\n\n\nThese considerations are based upon the limited evidence available to date about transmission of severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2), the virus that causes COVID-19, and knowledge of other viruses that cause severe respiratory illness including influenza and severe acute respiratory syndrome coronavirus (SARS-CoV).\n\nBreast milk is the best source of nutrition for most infants, and it provides protection against many illnesses. There are rare exceptions when breastfeeding or feeding expressed breast milk is not recommended. We do not know whether mothers with COVID-19 can transmit the virus via breast milk, but the limited data available suggest this is not likely to be a source of transmission.\n\nPasteurized donor human milk is important in the care of preterm infants. No information is currently available regarding the effect of pasteurization on SARS-CoV-2 but similar viruses are inactivated with this process. Disruptions in human milk donations may be seen during the COVID-19 pandemic. If hospitals have difficulty acquiring donor human milk, available supplies should be prioritized for preterm infants who will benefit most from human milk feeds.",
    },
   
  ];
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView>
        <FlatList
          data={this.Tips}
          renderItem={({ item }) => {
            return (
              <TipsWallTemplate
                title={item.title}
                image={item.image}
                details={item.details}
                link={item.link}
                navigation={navigation}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
