import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import { ScrollView } from "react-native-gesture-handler";

const SECTIONS = [
  {
    title:
      "1.   Who is at risk for infection with SARS-COV-2, the virus that causes COVID-19?",
    content:
      "Currently, those at greatest risk of infection are persons who have had prolonged, unprotected close contact (i.e., within 6 feet for 15 minutes or longer) with a patient with confirmed SARS-CoV-2 infection, regardless of whether the patient has symptoms. Persons frequently in congregate settings (e.g., homeless shelters, assisted living facilities, college or university dormitories) are at increased risk of acquiring infection because of the increased likelihood of close contact. Those who live in or have recently been to areas with sustained transmission may also be at higher risk of infection. All persons can reduce the risk to themselves and others by wearing a mask, practicing physical distancing, washing their hands often, and taking other prevention measures. For more information, see Risk Assessment and Your Health.",
  },
  {
    title: "2.  Who is at risk for severe COVID-19?",
    content:
      "COVID-19 is a new disease and CDC is learning more about it every day. Among adults, the risk for severe illness from COVID-19 increases with age, with older adults at highest risk. Severe illness means that the person with COVID-19 may require hospitalization, intensive care, or a ventilator to help them breathe, or they may even die. People of any age with certain underlying medical conditions are also at increased risk for severe illness from SARS-CoV-2 infection. Based on what we know at this time, pregnant people might be at an increased risk for severe illness from SARS-CoV-2 infection compared with non-pregnant people. Additionally, there may be an increased risk for adverse pregnancy outcomes, such as preterm birth, among people who get sick with COVID-19 during pregnancy.",
  },
  {
    title: "3.  When is someone infectious?",
    content:
      "The onset and duration of viral shedding and the period of infectiousness for COVID-19 are not yet known with certainty. Based on current evidence, scientists believe that persons with mild to moderate COVID-19 may shed replication-competent SARS-CoV-2 for up to 10 days following symptom onset, while a small fraction of persons with severe COVID-19, including immunocompromised persons, may shed replication-competent virus for up to 20 days. It is possible that SARS-CoV-2 RNA may be detectable in the upper or lower respiratory tract for weeks after illness onset, similar to infections with MERS-CoV and SARS-CoV. However, detection of viral RNA does not necessarily mean that infectious virus is present. Based on existing literature, the incubation period (the time from exposure to development of symptoms) of SARS-CoV-2 and other (e.g., MERS-CoV, SARS-CoV) ranges from 2–14 days.",
  },
  {
    title: "4.  Which body fluids can spread infection?",
    content:
      "SARS-CoV-2 RNA has been detected in upper and lower respiratory tract specimens, and SARS-CoV-2 virus has been isolated from upper respiratory tract specimens and bronchoalveolar lavage fluid. SARS-CoV-2 RNA has been detected in blood and stool specimens, and SARS-CoV-2 virus has been isolated in cell culture from the stool of some patients, including a patient with pneumonia 15 days after symptom onset. The duration of SARS-CoV-2 RNA detection in upper and lower respiratory tract specimens and in extrapulmonary specimens is not yet known but may be several weeks or longer. Duration of several weeks or longer has been observed in cases of MERS-CoV or SARS-CoV infection. While viable, infectious SARS-CoV has been isolated from respiratory, blood, urine, and stool specimens, viable, infectious MERS-CoV has only been isolated from respiratory tract specimens. It is not yet known whether other non-respiratory body fluids from an infected person including blood, vomit, urine, breast milk, or semen can contain viable, infectious SARS-CoV-2.",
  },
  {
    title:
      "5.   Can people who recover from COVID-19 be re-infected with SARS-CoV2?",
    content:
      "The immune response, including duration of immunity, to SARS-CoV-2 infection is not yet understood. Patients infected with other betacoronaviruses (MERS-CoV, HCoV-OC43), the genus to which SARS-CoV-2 belongs, are unlikely to be re-infected shortly (e.g., 3 months or more) after they recover. However, more information is needed to know whether similar immune protection will be observed for patients with COVID-19.",
  },
  {
    title: "6.  How are COVID-19 patients treated?",
    content:
      "Not all patients with COVID-19 will require medical supportive care. Clinical management for hospitalized patients with COVID-19 is focused on supportive care for complications, including supplemental oxygen and advanced organ support for respiratory failure, septic shock, and multi-organ failure. Empiric testing and treatment for other viral or bacterial etiologies may be warranted.",
  },
  {
    title:
      "7.   When can patients with confirmed COVID-19 be discharged from the hospital?",
    content:
      "Patients can be discharged from the healthcare facility whenever clinically indicated. Meeting criteria for discontinuation of Transmission-Based Precautions is not a prerequisite for discharge from a healthcare facility. Isolation should be maintained at home if the patient returns home before the time period recommended for discontinuation of hospital Transmission-Based Precautions.",
  },
  {
    title: "8.  What antiviral drugs are available to treat COVID-19?",
    content:
      "There are currently no antiviral drugs approved by FDA to treat COVID-19.",
  },
  {
    title:
      "9.   Are any changes recommended to asthma treatment plan if my patient with asthma has COVID-19?",
    content:
      "Patients can be referred to CDC’s recommendations for caring for themselves or someone else at home sick with COVID-19. If nebulizer use at home is necessary for patients with asthma who have symptoms or a diagnosis of COVID-19, use of the nebulizer in a location that minimizes and preferably avoids exposure to any other members of the household, and preferably a location where air is not recirculated into the home (like a porch, patio, or garage) is recommended by national professional organizations, including the American College of Allergy, Asthma & Immunology (ACAAI) by the ACAAI and the Allergy & Asthma Network (AAN). Limiting the number of people in the room or location where the nebulizer is used is also recommended by the Asthma & Allergy Foundation of America (AAFA). Nebulizers should be used and cleaned according to the manufacturer’s instructions. If nebulizer use in a healthcare setting is necessary for patients who have either symptoms or a diagnosis of COVID-19, use CDC’s recommended precautions when performing aerosol-generating procedures (AGPs).",
  },
];
class Faq extends Component {
  state = {
    activeSections: [],
  };

  //   _renderSectionTitle = (section) => {
  //     return (
  //       <View style={styles.content}>
  //         <Text>{section.content}</Text>
  //       </View>
  //     );
  //   };

  _renderHeader = (section) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  };

  _renderContent = (section) => {
    return (
      <View style={styles.content}>
        <Text style={styles.content_text}>{section.content}</Text>
      </View>
    );
  };

  _updateSections = (activeSections) => {
    this.setState({ activeSections });
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <ScrollView>
            <Accordion
              sections={SECTIONS}
              activeSections={this.state.activeSections}
              renderSectionTitle={this._renderSectionTitle}
              renderHeader={this._renderHeader}
              renderContent={this._renderContent}
              onChange={this._updateSections}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Faq;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  btn: {
    marginVertical: 50,
    backgroundColor: "skyblue",
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  header: {
    backgroundColor: "#d1e4e6",
    marginBottom: 10,
    padding: 10,
  },
  content: {
    padding: 10,
  },
  headerText: {
    color: "#5e5e5e",
    fontWeight: "bold",
    fontSize: 16,
    fontStyle: "italic",
  },
  content_text: {
    fontSize: 15,
  },
});
