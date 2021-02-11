import React from "react";
import Question from "./Question";
import { useParams } from "react-router-dom";
import NotFound from "./notFound";

let timePassed = 0;

function Main() {
  if (!("timing" in localStorage)) {
    localStorage.setItem("timing", new Date().getTime() / 1000);
  } else {
    let timeFirst = parseInt(localStorage.getItem("timing"));
    let timeNow = new Date().getTime() / 1000;
    timePassed = (timeNow - timeFirst) * 1000;
  }

  let { id } = useParams();
  let start = parseInt(id) || -1;
  console.log("Start: ", start);
  if (start === -1) {
    return <NotFound />;
  }

  localStorage.setItem("current", id);

  let tmp = data[id - 1];
  tmp["currentTime"] = timePassed;

  return <Question data={tmp} />;
}

export default Main;

const data = [
  {
    //1.SORU
    title: "Test 3: Speaking - Read Aloud",
    current: 1,
    total: 25,
    totalTime: "00:45:00",
    currentTime: 0,
    description:
      "Look at the text below. In 20 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
    type: "read-aloud",
    initialTime: 20050,
    readingTime: 40,
    question:
      "Preventing pollution and protecting the environment necessitate the application of the principles of sustainable development. We have to consider to satisfy the needs of today without compromising the ability of future generations to meet their needs. This means that we should remedy existing pollution, but also anticipate and prevent future pollution sources in order to protect the environment and public health. Any environmental damage must be punishable by law, and polluters should pay compensation for the damage caused to the environment."
  },
  {
    //2.SORU
    title: "Test 3 : Speaking - Repeat Sentence",
    current: 2,
    total: 25,
    src: "https://linspark.com/testData/repeatSentence.mp3",
    totalTime: "00:45:00",
    currentTime: 0,
    description:
      "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
    type: "repeat-sentence",
    initialTime: 5050, //ms
    recordTime: 8 //8 saniye verilmis genelde
  },
  {
    //3.SORU
    title: "Test 3 : Speaking - Describe Image",
    current: 3,
    total: 25,
    totalTime: "00:45:00",
    currentTime: 1920000,
    description:
      "Look at the graph below. In 25 seconds, Please speak into the microphone and describe in detail what the map is showing. You will have 40 seconds to give your response.",
    type: "describe-image",
    initialTime: 25050, // resim gösterilme süresi ms
    recordTime: 40, //
    src: "https://linspark.com/testData/describeImage.jpg"
  },
  {
    //4. SORU
    title: "Test 3 : Writing - Summarize Written Text",
    current: 4,
    total: 25,
    totalTime: "00:45:00",
    currentTime: 1920000,
    description:
      "Read the passage below and summarize it using one sentence. Type you response in the box at the bottom of the screen. You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points in the passage.",
    type: "summarize-text",
    initialTime: 30000, // yazması için gereken zaman 10 dk olarak ayarla demo oncesi
    src:
      " An important way in which science has changed people and made them more civilized is by making them more tolerant. A tolerant person is one who does not interfere with other people, even if he thinks they are wrong, but he is prepared to let them think what they like and say what they think. If he thinks they are wrong he may try to persuade them to believe differently, but he will not try to force them.\n" +
      "This may not seem a very important point. A great deal of the misery of mankind in the past has sprung from people being unwilling to tolerate other people thinking differently from themselves. This intolerance has been particularly common in religious matters. All over the world, people have been killed and have tortured other people for not believing the same things as they did or for worshipping God in a different way.\n" +
      "Most religious beliefs are based on faith, and the point about them is that although you may be quite convinced of them yourself, you cannot be sure of persuading other people to believe them too because you cannot produce evidence for them. Now, it is with regard to beliefs of this kind that people are now more tolerant than they used to be. Formerly if a man thought differently about religious matters from his neighbours, he was very likely to be burnt alive. And if he did not believe in God and had no religion at all he was thought exceedingly wicked and was punished. This is no longer so."
  },
  {
    //5. SORU question -> soru metni, options -> soru secenekleri
    //genel sayac var sadece
    title: "Test 3 : Reading: Multiple Choice, Choose Single Option",
    current: 5,
    total: 25,
    totalTime: "00:45:00",
    currentTime: 1920000,
    description:
      "Read the text and answer the multiple choice question by selecting the correct response. Only one response is correct.",
    type: "reading-single-choose",
    question:
      " IT may well change the way you live, yet again. Welcome to the world of mobile commerce, where your hand–held device, be it a mobile phone, a personal digital assistant (PDA) or any other wireless application will soon be used for commercial transactions. Skeptical? Consider these facts. InJapan, mobile phones are used for location based services where the mobile service provider ties up with a host of other players such as restaurants, car rental companies etc. When the mobile user enters that zone, messages from all these players are flashed on the mobile device. Location based services are provided in several other countries as well. Which of the following most accurately summarises the opinion of the author in the text?",
    options: [
      "Location based services are the new craze in technology savvy Japan.",
      "Service providers in Japan are networking to squeeze the client.",
      "Mobile commerce is the next big thing on the technology block.",
      "Location based services are becoming fashionable these days."
    ]
  },
  {
    //6. SORU, paragraflari surukle birak, //genel sayac var sadece
    title: "Test 3 : Reading:  Re-order Paragraph",
    current: 6,
    total: 25,
    totalTime: "00:45:00",
    currentTime: 1920000,
    description:
      "The text boxes have been placed in a random order. Restore the original order by dragging the them.",
    type: "reorder-paragraph",
    options: [
      "China, officially the People's Republic of China (PRC), is a sovereign state in East Asia.",
      "China is a cradle of civilization, with its known history beginning with an ancient civilization – one of the world's earliest – that flourished in the fertile basin of the Yellow River in the North China Plain.",
      "Covering approximately 9.6 million square kilometers, China is the world's second-largest country by land area,[16] and either thethird or fourth-largest by total area, depending on the method of measurement.",
      "The Yangtze andYellow Rivers, the third- and sixth-longest in the world, run from the Tibetan Plateau to the densely populated eastern seaboard. "
    ]
  },
  {
    //7. SORU, bosluklari options lardan secerek doldurma //genel sayac var sadece
    title: "Test 3 : Reading: Fill In The Blanks",
    current: 7,
    total: 25,
    totalTime: "00:45:00",
    currentTime: 1920000,
    description:
      "Below is a text with blanks. Click on each blank, a list of choice will appear. Select the appropriate answer choice for each blank",
    type: "fill-blanks",
    initialTime: 30000, //soruyu yapmasi icin gereken zaman
    //field olacak yerlere -bosluk- yazildi.
    question:
      "Under the British rule in India, Christian missionaries from England, USA and other countries established missionary and $$ schools throughout the country. Later as these schools gained in popularity, more were started and some gained prestige. These schools marked the beginning of modern schooling in India and the syllabus and calendar they followed became the benchmark for schools in modern India. Today most of the schools follow the missionary school model in terms of tutoring, subject / syllabus, governance etc.with minor changes. Schools in India range from schools with large campuses with thousands of students and hefty fees to schools where children are taught under a tree with a small / no campus and are totally free of cost. There are $$ boards of schools in India, namely Central Board for Secondary Education (CBSE), Council for the Indian School Certificate Examinations (CISCE), Madrasa Boards of various states, Matriculation Boards of various states, State Boards of various boards, Anglo Indian Board, and so on. The typical syllabus today includes Language(s), Mathematics, Science — Physics, Chemistry, Biology, Geography, History, General Knowledge, Information Technology / Computer Science etc.. Extra curricular activities include physical $$ / sports and cultural activities like music, choreography, painting, theater / drama etc.",
    options: [
      ["relate", "tide", "boarding", "easy"],
      ["dollar", "varius", "minute", "great"],
      ["people", "lazy", "education", "boy"]
    ]
  },
  {
    //8. SORU, Listening hemen altinda question sorusu, onun altinda coklu secilebilen secenekler var.
    //genel sayac var sadece tabi listening oncesi 3-4 saniye bekleme zaten var.
    title: "Test 3 : Listening - Multiple Choice, Choose Single Answer",
    current: 8,
    total: 25,
    totalTime: "00:45:00",
    currentTime: 1920000,
    description:
      "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct",
    type: "listen-single-choose",
    initialTime: 6000, //soruyu yapmasi icin gereken zaman
    src: "https://linspark.com/testData/63-listen-single.mp3",
    question: "What was Kepler’s main scientific mission?",
    options: [
      "To find the most mysterious stars in the universe",
      "To find planets outside our solar system",
      "To find the reason of existence of this universe",
      "To find the reason of existence of this universe"
    ]
  },
  {
    //9. SORU - paragraftaki kelimelere tiklandiginda o kelimenin background sari oluyor.
    //genel sayac var sadece
    title: "Test 3 : Listening - Highlight Incorrect Words ",
    current: 9,
    total: 25,
    totalTime: "00:45:00",
    currentTime: 1920000,
    description:
      "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
    type: "highlight-words",
    initialTime: 6000,
    src: "https://linspark.com/testData/65-highlight-words.mp3",
    question:
      "Let me walk you through the three most basic factors in farming: first, hydrate seed is created when you cross two seeds together. If you naturally pollute a high yielding variety together with a drought resistant variety, you get a hybrid that inherits positive traits from both of its patents. Next conventional fertilizer if used responsibility is environmentally sustainable, if you micro dose just a pinch of fertilizer to a plant that is taller than I am, you unlock enormous yield gain, they are known as farm inputs. Farm inputs need to be combined with great practice. When you space your seeds and plant with huge amounts of compose, farmers multiply their harvests."
  },
  {
    //10. SORU - Ogrenci dinledigini yazacak
    //genel sayac var sadece tabi listening oncesi 3-4 saniye bekleme zaten var.
    title: "Test 3 : Listening - Write From Dictation",
    current: 10,
    total: 25,
    totalTime: "00:45:00",
    currentTime: 1920000,
    description:
      "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
    type: "write-dictation",
    initialTime: 6000,
    src: "https://linspark.com/testData/69-write-dictation.mp3"
  }
];
