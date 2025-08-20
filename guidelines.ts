export const guidelines = {
  "global_rules": {
    "context": "Indian or neutral; everyday school/home settings; age-appropriate names/examples.",
    "tone": "Clear, concrete, child-safe; avoid sarcasm, dark themes, adult slang.",
    "language_control": "No rare/archaic words; limit idioms until Grade 6+.",
    "text_hygiene": "No spelling errors; consistent punctuation; no emoji/ASCII art.",
    "diversity": "Rotate genres/topics; avoid repetitive templates across recent selections.",
    "sight_words": "Include grade target count from curated list.",
    "reject_if": [
      "word_count outside grade range (±5% tolerance)",
      "sentence complexity exceeds grade allowance",
      "avg syllables/word beyond grade band",
      "disallowed themes (violence, explicit politics, prejudice), heavy jargon",
      "typos/formatting issues"
    ],
    "supported_languages": [
      "en",
      "hi"
    ]
  },
  "grades": [
    {
      "grade": 1,
      "reading_level_summary": "Beginning to read simple words and short sentences.",
      "word_range": {
        "min": 10,
        "max": 20,
        "tolerance_pct": 5
      },
      "sentence_types_allowed": [
        "simple"
      ],
      "syllables_per_word_target": {
        "min": 1,
        "max": 2,
        "source_text": "Students should be comfortable reading words with 1-2 syllables."
      },
      "phonics_or_morphology_focus": "- Introduction to basic Hindi alphabets (Varnamala) and their sounds (Varn).\n- Learning to recognize and pronounce individual consonants (Vyanjan) and vowels (Swar).\n- Blending consonant-vowel combinations to form simple syllables (Akshar).\n- Beginning to read and write simple CVC (Consonant-Vowel-Consonant) words like बाल (baal),वह, पानी\n",
      "sight_words": {
        "recommended_per_passage": "6–10",
        "examples": [
          "यह (Yah)",
          "This",
          "है (Hai)",
          "Is",
          "एक (Ek)",
          "One",
          "मैं (Main)",
          "I",
          "तू (Tu)",
          "You (informal)",
          "हम (Hum)",
          "We"
        ]
      },
      "punctuation_allowed": [
        "full_stop",
        "question_mark"
      ],
      "genres": {
        "available": [
          "Narrative",
          "Small passages about daily routines, content relevant to children's immediate lives."
        ],
        "weights_pct": {
          "Narrative": 100,
          "Small passages about daily routines, content relevant to children's immediate lives.": 0
        }
      },
      "topic_suggestions": [
        "home",
        "school",
        "playground",
        "family",
        "pets"
      ],
      "level_progression_hint": [
        {
          "level": 1,
          "target_word_count": 10,
          "sentence_types_hint": [
            "simple"
          ]
        },
        {
          "level": 2,
          "target_word_count": 11,
          "sentence_types_hint": [
            "simple"
          ]
        },
        {
          "level": 3,
          "target_word_count": 12,
          "sentence_types_hint": [
            "simple"
          ]
        },
        {
          "level": 4,
          "target_word_count": 14,
          "sentence_types_hint": [
            "simple"
          ]
        },
        {
          "level": 5,
          "target_word_count": 15,
          "sentence_types_hint": [
            "simple"
          ]
        },
        {
          "level": 6,
          "target_word_count": 16,
          "sentence_types_hint": [
            "simple"
          ]
        },
        {
          "level": 7,
          "target_word_count": 17,
          "sentence_types_hint": [
            "simple",
            "compound"
          ]
        },
        {
          "level": 8,
          "target_word_count": 19,
          "sentence_types_hint": [
            "simple",
            "compound"
          ]
        },
        {
          "level": 9,
          "target_word_count": 20,
          "sentence_types_hint": [
            "simple",
            "compound"
          ]
        },
        {
          "level": 10,
          "target_word_count": 21,
          "sentence_types_hint": [
            "simple",
            "compound"
          ]
        }
      ],
      "selection_accept_if": [
        "word_count within word_range (± tolerance)",
        "sentence_types ⊆ sentence_types_allowed",
        "avg_syllables within syllables_per_word_target band (if band present)",
        "genre ∈ genres.available",
        "sight_word_hits within recommended_per_passage"
      ],
      "selection_rank_by": [
        "distance from word_range midpoint (minimize)",
        "sight_word_hits coverage (maximize)",
        "sentence type proportion match (maximize)",
        "recent topic/genre diversity (maximize)"
      ],
      "languages_available": [
        "en",
        "hi"
      ]
    },
    {
      "grade": 2,
      "reading_level_summary": "Reading simple sentences and short paragraphs.",
      "word_range": {
        "min": 30,
        "max": 50,
        "tolerance_pct": 5
      },
      "sentence_types_allowed": [
        "simple"
      ],
      "syllables_per_word_target": {
        "min": 1,
        "max": 2,
        "source_text": "Students should be able to read words with 1-2 syllables."
      },
      "phonics_or_morphology_focus": "- Expanding phonics knowledge to include consonant clusters (Vyanjan Sanyukt Akshar) such as श, क्, त्र,  etc.\n- Introducing vowel digraphs (Swar Yojak Akshar) like ऐ, ओ, औ, etc., and their corresponding sounds.\n- Practicing reading and writing two-syllable words with simple phonetic patterns.\n- Recognizing and decoding common prefixes and suffixes to build vocabulary.\n",
      "sight_words": {
        "recommended_per_passage": "6–10",
        "examples": [
          "यहाँ (Yahaan)",
          "Here",
          "वहाँ (Vahaan)",
          "There",
          "कौन (Kaun)",
          "Who",
          "क्या (Kya)",
          "What",
          "कब (Kab)",
          "When",
          "कहाँ (Kahaan)",
          "Where"
        ]
      },
      "punctuation_allowed": [
        "full_stop",
        "question_mark",
        "exclamation"
      ],
      "genres": {
        "available": [
          "Narrative",
          "Small passages about daily routines, employing personification as a literary tool where animals and objects acquire human"
        ],
        "weights_pct": {
          "Narrative": 100,
          "Small passages about daily routines, employing personification as a literary tool where animals and objects acquire human": 0
        }
      },
      "topic_suggestions": [
        "morning routine",
        "classroom",
        "markets",
        "simple festivals",
        "sports day"
      ],
      "level_progression_hint": [
        {
          "level": 1,
          "target_word_count": 30,
          "sentence_types_hint": [
            "simple"
          ]
        },
        {
          "level": 2,
          "target_word_count": 32,
          "sentence_types_hint": [
            "simple"
          ]
        },
        {
          "level": 3,
          "target_word_count": 35,
          "sentence_types_hint": [
            "simple"
          ]
        },
        {
          "level": 4,
          "target_word_count": 37,
          "sentence_types_hint": [
            "simple"
          ]
        },
        {
          "level": 5,
          "target_word_count": 40,
          "sentence_types_hint": [
            "simple"
          ]
        },
        {
          "level": 6,
          "target_word_count": 42,
          "sentence_types_hint": [
            "simple"
          ]
        },
        {
          "level": 7,
          "target_word_count": 45,
          "sentence_types_hint": [
            "simple",
            "compound"
          ]
        },
        {
          "level": 8,
          "target_word_count": 47,
          "sentence_types_hint": [
            "simple",
            "compound"
          ]
        },
        {
          "level": 9,
          "target_word_count": 50,
          "sentence_types_hint": [
            "simple",
            "compound"
          ]
        },
        {
          "level": 10,
          "target_word_count": 52,
          "sentence_types_hint": [
            "simple",
            "compound"
          ]
        }
      ],
      "selection_accept_if": [
        "word_count within word_range (± tolerance)",
        "sentence_types ⊆ sentence_types_allowed",
        "avg_syllables within syllables_per_word_target band (if band present)",
        "genre ∈ genres.available",
        "sight_word_hits within recommended_per_passage"
      ],
      "selection_rank_by": [
        "distance from word_range midpoint (minimize)",
        "sight_word_hits coverage (maximize)",
        "sentence type proportion match (maximize)",
        "recent topic/genre diversity (maximize)"
      ],
      "languages_available": [
        "en",
        "hi"
      ]
    },
    {
      "grade": 3,
      "reading_level_summary": "Reading more complex sentences and longer paragraphs.",
      "word_range": {
        "min": 50,
        "max": 65,
        "tolerance_pct": 5
      },
      "sentence_types_allowed": [
        "simple",
        "compound"
      ],
      "syllables_per_word_target": {
        "min": 2,
        "max": 3,
        "source_text": "Students should be comfortable reading words with 2-3 syllables."
      },
      "phonics_or_morphology_focus": "- Continuing to reinforce and practice phonetic skills learned in previous grades.\n- Introducing more complex vowel and consonant clusters (Sanyunkt Akshar) such as ख्य, ज्ञ, श्र, etc.\n- Exploring diphthongs (Dwigun Swar) and their pronunciation in words.(आई, अँधेरा, ऐँ, आँख)\n- Reading and spelling multisyllabic words with various phonetic patterns and syllable structures. (परिक्रमा, अभिवादन)",
      "sight_words": {
        "recommended_per_passage": "5–8",
        "examples": [
          "स्कूल (School)",
          "School",
          "पाठशाला (Paathshala)",
          "Classroom",
          "पढ़ाई (Padhaai)",
          "Study",
          "लेखन (Lekhan)",
          "Writing",
          "गणित (Ganit)",
          "Mathematics",
          "विज्ञान (Vigyaan)",
          "Science"
        ]
      },
      "punctuation_allowed": [
        "full_stop",
        "comma",
        "question_mark",
        "exclamation",
        "quotes"
      ],
      "genres": {
        "available": [
          "Narrative",
          "Stories using personification.",
          "Descriptive texts creating vivid imagery through words.",
          "Poetry/Rhyme"
        ],
        "weights_pct": {
          "Narrative": 80,
          "Stories using personification.": 0,
          "Descriptive texts creating vivid imagery through words.": 0,
          "Poetry/Rhyme": 20
        }
      },
      "topic_suggestions": [
        "neighbourhood",
        "field trip",
        "rainy day",
        "teamwork",
        "simple nature facts"
      ],
      "level_progression_hint": [
        {
          "level": 1,
          "target_word_count": 50,
          "sentence_types_hint": [
            "simple",
            "compound"
          ]
        },
        {
          "level": 2,
          "target_word_count": 52,
          "sentence_types_hint": [
            "simple",
            "compound"
          ]
        },
        {
          "level": 3,
          "target_word_count": 55,
          "sentence_types_hint": [
            "simple",
            "compound"
          ]
        },
        {
          "level": 4,
          "target_word_count": 57,
          "sentence_types_hint": [
            "simple",
            "compound"
          ]
        },
        {
          "level": 5,
          "target_word_count": 60,
          "sentence_types_hint": [
            "simple",
            "compound"
          ]
        },
        {
          "level": 6,
          "target_word_count": 62,
          "sentence_types_hint": [
            "simple",
            "compound"
          ]
        },
        {
          "level": 7,
          "target_word_count": 65,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 8,
          "target_word_count": 67,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 9,
          "target_word_count": 70,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 10,
          "target_word_count": 72,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        }
      ],
      "selection_accept_if": [
        "word_count within word_range (± tolerance)",
        "sentence_types ⊆ sentence_types_allowed",
        "avg_syllables within syllables_per_word_target band (if band present)",
        "genre ∈ genres.available",
        "sight_word_hits within recommended_per_passage"
      ],
      "selection_rank_by": [
        "distance from word_range midpoint (minimize)",
        "sight_word_hits coverage (maximize)",
        "sentence type proportion match (maximize)",
        "recent topic/genre diversity (maximize)"
      ],
      "languages_available": [
        "en",
        "hi"
      ]
    },
    {
      "grade": 4,
      "reading_level_summary": "Reading longer paragraphs and simple stories.",
      "word_range": {
        "min": 65,
        "max": 80,
        "tolerance_pct": 5
      },
      "sentence_types_allowed": [
        "simple",
        "compound"
      ],
      "syllables_per_word_target": {
        "min": 2,
        "max": 3,
        "source_text": "Students should be able to read words with 2-3 syllables."
      },
      "phonics_or_morphology_focus": "- Reviewing and mastering phonics rules and patterns covered in earlier grades.\n- Reading unfamiliar words using phonetic analysis skills.\n- Developing fluency in reading aloud and recognizing phonetic cues in unfamiliar words.\n-  Developing fluency in reading words with Sanyunkt Vyanjan",
      "sight_words": {
        "recommended_per_passage": "5–8",
        "examples": [
          "विद्यालय (Vidyaalay)",
          "School",
          "शिक्षक (Shikshak)",
          "Teacher",
          "छात्र (Chhaatra)",
          "Student",
          "पाठ्यक्रम (Paathyakram)",
          "Curriculum",
          "वस्त्र (Vastra)",
          "Clothing",
          "खाना (Khana)",
          "Food"
        ]
      },
      "punctuation_allowed": [
        "full_stop",
        "comma",
        "question_mark",
        "exclamation",
        "quotes"
      ],
      "genres": {
        "available": [
          "Narrative",
          "Use of personification and fantasy as literary tools.",
          "Descriptive texts and simple procedural texts (e.g., the process of making tea).",
          "Poetry/Rhyme"
        ],
        "weights_pct": {
          "Narrative": 80,
          "Use of personification and fantasy as literary tools.": 0,
          "Descriptive texts and simple procedural texts (e.g., the process of making tea).": 0,
          "Poetry/Rhyme": 20
        }
      },
      "topic_suggestions": [
        "procedures/how-to",
        "science mini-facts",
        "community helpers",
        "folk tale lite",
        "poems (rhyme)"
      ],
      "level_progression_hint": [
        {
          "level": 1,
          "target_word_count": 65,
          "sentence_types_hint": [
            "simple",
            "compound"
          ]
        },
        {
          "level": 2,
          "target_word_count": 68,
          "sentence_types_hint": [
            "simple",
            "compound"
          ]
        },
        {
          "level": 3,
          "target_word_count": 70,
          "sentence_types_hint": [
            "simple",
            "compound"
          ]
        },
        {
          "level": 4,
          "target_word_count": 73,
          "sentence_types_hint": [
            "simple",
            "compound"
          ]
        },
        {
          "level": 5,
          "target_word_count": 75,
          "sentence_types_hint": [
            "simple",
            "compound"
          ]
        },
        {
          "level": 6,
          "target_word_count": 78,
          "sentence_types_hint": [
            "simple",
            "compound"
          ]
        },
        {
          "level": 7,
          "target_word_count": 80,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 8,
          "target_word_count": 83,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 9,
          "target_word_count": 85,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 10,
          "target_word_count": 88,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        }
      ],
      "selection_accept_if": [
        "word_count within word_range (± tolerance)",
        "sentence_types ⊆ sentence_types_allowed",
        "avg_syllables within syllables_per_word_target band (if band present)",
        "genre ∈ genres.available",
        "sight_word_hits within recommended_per_passage"
      ],
      "selection_rank_by": [
        "distance from word_range midpoint (minimize)",
        "sight_word_hits coverage (maximize)",
        "sentence type proportion match (maximize)",
        "recent topic/genre diversity (maximize)"
      ],
      "languages_available": [
        "en",
        "hi"
      ]
    },
    {
      "grade": 5,
      "reading_level_summary": "Reading more complex stories and passages.",
      "word_range": {
        "min": 80,
        "max": 100,
        "tolerance_pct": 5
      },
      "sentence_types_allowed": [
        "simple",
        "compound",
        "complex"
      ],
      "syllables_per_word_target": {
        "min": 3,
        "max": 4,
        "source_text": "Students should be comfortable reading words with 3-4 syllables."
      },
      "phonics_or_morphology_focus": "- Reinforcing and extending phonics knowledge through literature, poetry, and informational texts.\n- Exploring nuances of pronunciation and regional variations in Hindi phonetics.\n- वर्ण-ध्वनि संबंध (gungan वर्ण-ध्वनि संबंध (varna-dhvani sambandh) - Strengthening letter-sound relationships.\nसंयुक्ताक्षरों का ज्ञान (sanyuktaksharon ka ज्ञान (gyan) - Knowledge of conjuncts.\n- Applying phonics knowledge to comprehend and spell words in context-rich passages and stories.\n",
      "sight_words": {
        "recommended_per_passage": "4–6",
        "examples": [
          "परीक्षा (Pariksha)",
          "Exam",
          "शिक्षा (Shiksha)",
          "Education",
          "उत्सव (Utsav)",
          "Festival",
          "समाचार (Samaachaar)",
          "News",
          "खेल (Khel)",
          "Game",
          "विचार (Vichaar)",
          "Idea"
        ]
      },
      "punctuation_allowed": [
        "full_stop",
        "comma",
        "question_mark",
        "exclamation",
        "colon",
        "semicolon",
        "quotes"
      ],
      "genres": {
        "available": [
          "Narrative",
          "Inclusion of personification, fantasy, and imagination as literary tools.",
          "Descriptive texts and procedural texts.",
          "Poetry/Rhyme"
        ],
        "weights_pct": {
          "Narrative": 80,
          "Inclusion of personification, fantasy, and imagination as literary tools.": 0,
          "Descriptive texts and procedural texts.": 0,
          "Poetry/Rhyme": 20
        }
      },
      "topic_suggestions": [
        "short biography",
        "imaginative travel",
        "ecosystems basics",
        "festival processions",
        "simple experiments"
      ],
      "level_progression_hint": [
        {
          "level": 1,
          "target_word_count": 80,
          "sentence_types_hint": [
            "simple",
            "compound"
          ]
        },
        {
          "level": 2,
          "target_word_count": 83,
          "sentence_types_hint": [
            "simple",
            "compound"
          ]
        },
        {
          "level": 3,
          "target_word_count": 87,
          "sentence_types_hint": [
            "simple",
            "compound"
          ]
        },
        {
          "level": 4,
          "target_word_count": 90,
          "sentence_types_hint": [
            "simple",
            "compound"
          ]
        },
        {
          "level": 5,
          "target_word_count": 93,
          "sentence_types_hint": [
            "simple",
            "compound"
          ]
        },
        {
          "level": 6,
          "target_word_count": 97,
          "sentence_types_hint": [
            "simple",
            "compound"
          ]
        },
        {
          "level": 7,
          "target_word_count": 100,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 8,
          "target_word_count": 103,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 9,
          "target_word_count": 107,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 10,
          "target_word_count": 110,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        }
      ],
      "selection_accept_if": [
        "word_count within word_range (± tolerance)",
        "sentence_types ⊆ sentence_types_allowed",
        "avg_syllables within syllables_per_word_target band (if band present)",
        "genre ∈ genres.available",
        "sight_word_hits within recommended_per_passage"
      ],
      "selection_rank_by": [
        "distance from word_range midpoint (minimize)",
        "sight_word_hits coverage (maximize)",
        "sentence type proportion match (maximize)",
        "recent topic/genre diversity (maximize)"
      ],
      "languages_available": [
        "en",
        "hi"
      ]
    },
    {
      "grade": 6,
      "reading_level_summary": "Reading varied texts with increased vocabulary.",
      "word_range": {
        "min": 100,
        "max": 115,
        "tolerance_pct": 5
      },
      "sentence_types_allowed": [
        "simple",
        "compound",
        "complex"
      ],
      "syllables_per_word_target": {
        "min": 3,
        "max": 4,
        "source_text": "Students should be able to read words with 3-4 syllables.\nRecognizing open, closed, vowel team, and other syllable structures to break down larger words"
      },
      "phonics_or_morphology_focus": "- Introducing advanced phonics concepts such as nasalization, aspirated consonants, and retroflex sounds.\n- applying previously learned letter-sound relationships (varna-dhvani sambandh) to more complex words.\n- Reads complex sentences which has a wider range of vocabulary related to different subjects like science, history, or literature.\n- Understanding morphemes (prefixes, suffixes, and root words)",
      "sight_words": {
        "recommended_per_passage": "4–6",
        "examples": [
          "प्रेम (Prem)",
          "Love",
          "न्याय (Nyaay)",
          "Justice",
          "अध्यात्म (Adhyaatma)",
          "Spirituality",
          "राजधानी (Raajdhani)",
          "Capital",
          "पुरातत्व (Puraatva)",
          "Archaeology",
          "राष्ट्रीय (Rashtriya)",
          "National"
        ]
      },
      "punctuation_allowed": [
        "full_stop",
        "comma",
        "question_mark",
        "exclamation",
        "colon",
        "semicolon",
        "quotes"
      ],
      "genres": {
        "available": [
          "Narrative",
          "Incorporation of fantasy and imagination.",
          "Descriptive, expository, and procedural texts.",
          "Poetry/Rhyme"
        ],
        "weights_pct": {
          "Narrative": 75,
          "Incorporation of fantasy and imagination.": 0,
          "Descriptive, expository, and procedural texts.": 0,
          "Poetry/Rhyme": 25
        }
      },
      "topic_suggestions": [
        "expository (science/sst)",
        "tech-in-daily-life",
        "myth reimagined",
        "symbolic poems",
        "how-it-works"
      ],
      "level_progression_hint": [
        {
          "level": 1,
          "target_word_count": 100,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 2,
          "target_word_count": 103,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 3,
          "target_word_count": 106,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 4,
          "target_word_count": 109,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 5,
          "target_word_count": 112,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 6,
          "target_word_count": 115,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 7,
          "target_word_count": 118,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 8,
          "target_word_count": 121,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 9,
          "target_word_count": 124,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 10,
          "target_word_count": 127,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        }
      ],
      "selection_accept_if": [
        "word_count within word_range (± tolerance)",
        "sentence_types ⊆ sentence_types_allowed",
        "avg_syllables within syllables_per_word_target band (if band present)",
        "genre ∈ genres.available",
        "sight_word_hits within recommended_per_passage"
      ],
      "selection_rank_by": [
        "distance from word_range midpoint (minimize)",
        "sight_word_hits coverage (maximize)",
        "sentence type proportion match (maximize)",
        "recent topic/genre diversity (maximize)"
      ],
      "languages_available": [
        "en",
        "hi"
      ]
    },
    {
      "grade": 7,
      "reading_level_summary": "Reading texts with diverse themes and styles.",
      "word_range": {
        "min": 115,
        "max": 130,
        "tolerance_pct": 5
      },
      "sentence_types_allowed": [
        "simple",
        "compound",
        "complex"
      ],
      "syllables_per_word_target": {
        "min": 4,
        "max": 4,
        "source_text": "Students should be comfortable reading words with 4 syllables.\n"
      },
      "phonics_or_morphology_focus": "- Phonics will not be the focus for 7th-grade students. Students should be able to read aloud smoothly  and with proper intonation, conveying the emotions and meaning of the text.\n- Decoding and reading multisyllabic words: Using their knowledge of syllable types, prefixes, suffixes, and root words to break down and understand even longer words.\n- Understanding and reading compound words (Samas) \nNote: \n- Reading subjects like Science, Mathematics, Social Science in Hindi",
      "sight_words": {
        "recommended_per_passage": "3–5",
        "examples": [
          "राजनीतिक (Rajneetik)",
          "Political",
          "आर्थिक (Aarthik)",
          "Economic",
          "सामाजिक (Saamaajik)",
          "Social",
          "वाणिज्यिक (Vaannijyik)",
          "Commercial",
          "प्रौद्योगिकी (Praudyogiki)",
          "Technology",
          "आवाज़ (Aawaaz)",
          "Voice"
        ]
      },
      "punctuation_allowed": [
        "full_stop",
        "comma",
        "question_mark",
        "exclamation",
        "colon",
        "semicolon",
        "quotes"
      ],
      "genres": {
        "available": [
          "Narrative",
          "Poetry/Rhyme",
          "fiction, Subject specific passages can also be used."
        ],
        "weights_pct": {
          "Narrative": 75,
          "Poetry/Rhyme": 25,
          "fiction, Subject specific passages can also be used.": 0
        }
      },
      "topic_suggestions": [
        "current-affairs explainer (neutral)",
        "interview snippets",
        "argument-lite expository",
        "sci-fi vignettes",
        "history mini-episodes"
      ],
      "level_progression_hint": [
        {
          "level": 1,
          "target_word_count": 115,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 2,
          "target_word_count": 118,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 3,
          "target_word_count": 121,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 4,
          "target_word_count": 124,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 5,
          "target_word_count": 127,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 6,
          "target_word_count": 131,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 7,
          "target_word_count": 134,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 8,
          "target_word_count": 137,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 9,
          "target_word_count": 140,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 10,
          "target_word_count": 143,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        }
      ],
      "selection_accept_if": [
        "word_count within word_range (± tolerance)",
        "sentence_types ⊆ sentence_types_allowed",
        "avg_syllables within syllables_per_word_target band (if band present)",
        "genre ∈ genres.available",
        "sight_word_hits within recommended_per_passage"
      ],
      "selection_rank_by": [
        "distance from word_range midpoint (minimize)",
        "sight_word_hits coverage (maximize)",
        "sentence type proportion match (maximize)",
        "recent topic/genre diversity (maximize)"
      ],
      "languages_available": [
        "en",
        "hi"
      ]
    },
    {
      "grade": 8,
      "reading_level_summary": "Reading complex texts with advanced vocabulary.",
      "word_range": {
        "min": 130,
        "max": 150,
        "tolerance_pct": 5
      },
      "sentence_types_allowed": [
        "simple",
        "compound",
        "complex"
      ],
      "syllables_per_word_target": {
        "min": 4,
        "max": null,
        "source_text": "Students should be able to read words with 4 or more syllables."
      },
      "phonics_or_morphology_focus": "Building upon the foundation of 7th grade, 8th grade students are expected to read:\n\n- Text Types: Introduce a wider variety of text types like historical accounts, biographical sketches, or scientific articles besides fiction and poems.\n- Comprehension Strategies: Incorporate questions that assess different comprehension strategies like identifying the main idea, making inferences, or summarizing the text.\n- Higher-Order Thinking: Include open-ended questions that encourage critical thinking and analysis of the text's message or themes.\n- Include excerpts from fiction, non-fiction, poems, or short plays to assess comprehension across different genres and",
      "sight_words": {
        "recommended_per_passage": "3–5",
        "examples": [
          "परिपूर्ण (Paripoorn)",
          "Perfect",
          "विश्वास (Vishwaas)",
          "Belief",
          "संयोजन (Sanyojan)",
          "Coordination",
          "अभिवृद्धि (Abhivriddhi)",
          "Progress",
          "विकास (Vikas)",
          "Development",
          "नियंत्रण (Niyamtran)",
          "Control"
        ]
      },
      "punctuation_allowed": [
        "full_stop",
        "comma",
        "question_mark",
        "exclamation",
        "colon",
        "semicolon",
        "quotes"
      ],
      "genres": {
        "available": [
          "Narrative",
          "Poetry/Rhyme",
          "fiction, Subject specific passages can also be used."
        ],
        "weights_pct": {
          "Narrative": 75,
          "Poetry/Rhyme": 25,
          "fiction, Subject specific passages can also be used.": 0
        }
      },
      "topic_suggestions": [
        "comparative expository",
        "multi-thread narratives",
        "science feature",
        "biographical sketch",
        "short play/script"
      ],
      "level_progression_hint": [
        {
          "level": 1,
          "target_word_count": 130,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 2,
          "target_word_count": 134,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 3,
          "target_word_count": 138,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 4,
          "target_word_count": 142,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 5,
          "target_word_count": 146,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 6,
          "target_word_count": 149,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 7,
          "target_word_count": 153,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 8,
          "target_word_count": 157,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 9,
          "target_word_count": 161,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        },
        {
          "level": 10,
          "target_word_count": 165,
          "sentence_types_hint": [
            "simple",
            "compound",
            "complex"
          ]
        }
      ],
      "selection_accept_if": [
        "word_count within word_range (± tolerance)",
        "sentence_types ⊆ sentence_types_allowed",
        "avg_syllables within syllables_per_word_target band (if band present)",
        "genre ∈ genres.available",
        "sight_word_hits within recommended_per_passage"
      ],
      "selection_rank_by": [
        "distance from word_range midpoint (minimize)",
        "sight_word_hits coverage (maximize)",
        "sentence type proportion match (maximize)",
        "recent topic/genre diversity (maximize)"
      ],
      "languages_available": [
        "en",
        "hi"
      ]
    }
  ],
  "grade_transitions": [
    {
      "from_grade": 1,
      "to_grade": 2,
      "metrics": {
        "g_from_l10_wordcount": 21,
        "g_to_l1_wordcount": 30,
        "gap": 9
      },
      "bridge": {
        "enabled": true,
        "g_from_bridge_level": {
          "word_range": {
            "min": 25,
            "max": 28
          }
        },
        "sentence_transition": {
          "carry_over_types": [
            "simple"
          ],
          "new_types_intro": []
        },
        "sight_words_bridge_band": {
          "min": 6,
          "max": 10
        }
      },
      "g_to_l1_onramp": {
        "sessions": 3,
        "word_range_override": {
          "min": 26,
          "max": 33
        },
        "sentence_transition": {
          "carry_over_types": [
            "simple"
          ],
          "new_types_intro": []
        }
      }
    },
    {
      "from_grade": 2,
      "to_grade": 3,
      "metrics": {
        "g_from_l10_wordcount": 52,
        "g_to_l1_wordcount": 50,
        "gap": -2
      },
      "bridge": {
        "enabled": true,
        "g_from_bridge_level": {
          "word_range": {
            "min": 51,
            "max": 50
          }
        },
        "sentence_transition": {
          "carry_over_types": [
            "simple"
          ],
          "new_types_intro": [
            {
              "type": "compound",
              "max_share_pct": 20
            }
          ]
        },
        "sight_words_bridge_band": {
          "min": 5,
          "max": 10
        }
      },
      "g_to_l1_onramp": {
        "sessions": 3,
        "word_range_override": {
          "min": 42,
          "max": 55
        },
        "sentence_transition": {
          "carry_over_types": [
            "simple"
          ],
          "new_types_intro": [
            {
              "type": "compound",
              "max_share_pct": 20
            }
          ]
        }
      }
    },
    {
      "from_grade": 3,
      "to_grade": 4,
      "metrics": {
        "g_from_l10_wordcount": 72,
        "g_to_l1_wordcount": 65,
        "gap": -7
      },
      "bridge": {
        "enabled": true,
        "g_from_bridge_level": {
          "word_range": {
            "min": 69,
            "max": 66
          }
        },
        "sentence_transition": {
          "carry_over_types": [
            "compound",
            "simple"
          ],
          "new_types_intro": []
        },
        "sight_words_bridge_band": {
          "min": 5,
          "max": 8
        }
      },
      "g_to_l1_onramp": {
        "sessions": 3,
        "word_range_override": {
          "min": 55,
          "max": 72
        },
        "sentence_transition": {
          "carry_over_types": [
            "compound",
            "simple"
          ],
          "new_types_intro": []
        }
      }
    },
    {
      "from_grade": 4,
      "to_grade": 5,
      "metrics": {
        "g_from_l10_wordcount": 88,
        "g_to_l1_wordcount": 80,
        "gap": -8
      },
      "bridge": {
        "enabled": true,
        "g_from_bridge_level": {
          "word_range": {
            "min": 85,
            "max": 82
          }
        },
        "sentence_transition": {
          "carry_over_types": [
            "compound",
            "simple"
          ],
          "new_types_intro": [
            {
              "type": "complex",
              "max_share_pct": 20
            }
          ]
        },
        "sight_words_bridge_band": {
          "min": 4,
          "max": 8
        }
      },
      "g_to_l1_onramp": {
        "sessions": 3,
        "word_range_override": {
          "min": 68,
          "max": 88
        },
        "sentence_transition": {
          "carry_over_types": [
            "compound",
            "simple"
          ],
          "new_types_intro": [
            {
              "type": "complex",
              "max_share_pct": 20
            }
          ]
        }
      }
    },
    {
      "from_grade": 5,
      "to_grade": 6,
      "metrics": {
        "g_from_l10_wordcount": 110,
        "g_to_l1_wordcount": 100,
        "gap": -10
      },
      "bridge": {
        "enabled": true,
        "g_from_bridge_level": {
          "word_range": {
            "min": 106,
            "max": 102
          }
        },
        "sentence_transition": {
          "carry_over_types": [
            "complex",
            "compound",
            "simple"
          ],
          "new_types_intro": []
        },
        "sight_words_bridge_band": {
          "min": 4,
          "max": 6
        }
      },
      "g_to_l1_onramp": {
        "sessions": 3,
        "word_range_override": {
          "min": 85,
          "max": 110
        },
        "sentence_transition": {
          "carry_over_types": [
            "complex",
            "compound",
            "simple"
          ],
          "new_types_intro": []
        }
      }
    },
    {
      "from_grade": 6,
      "to_grade": 7,
      "metrics": {
        "g_from_l10_wordcount": 127,
        "g_to_l1_wordcount": 115,
        "gap": -12
      },
      "bridge": {
        "enabled": true,
        "g_from_bridge_level": {
          "word_range": {
            "min": 122,
            "max": 117
          }
        },
        "sentence_transition": {
          "carry_over_types": [
            "complex",
            "compound",
            "simple"
          ],
          "new_types_intro": []
        },
        "sight_words_bridge_band": {
          "min": 3,
          "max": 6
        }
      },
      "g_to_l1_onramp": {
        "sessions": 3,
        "word_range_override": {
          "min": 98,
          "max": 126
        },
        "sentence_transition": {
          "carry_over_types": [
            "complex",
            "compound",
            "simple"
          ],
          "new_types_intro": []
        }
      }
    },
    {
      "from_grade": 7,
      "to_grade": 8,
      "metrics": {
        "g_from_l10_wordcount": 143,
        "g_to_l1_wordcount": 130,
        "gap": -13
      },
      "bridge": {
        "enabled": true,
        "g_from_bridge_level": {
          "word_range": {
            "min": 138,
            "max": 133
          }
        },
        "sentence_transition": {
          "carry_over_types": [
            "complex",
            "compound",
            "simple"
          ],
          "new_types_intro": []
        },
        "sight_words_bridge_band": {
          "min": 3,
          "max": 5
        }
      },
      "g_to_l1_onramp": {
        "sessions": 3,
        "word_range_override": {
          "min": 110,
          "max": 143
        },
        "sentence_transition": {
          "carry_over_types": [
            "complex",
            "compound",
            "simple"
          ],
          "new_types_intro": []
        }
      }
    }
  ],
  "practice_framework": {
    "version": "1.1",
    "evaluation_context": "sentence_only",
    "states": [
      "Seen",
      "UnderReview",
      "PracticingUnflagged",
      "PracticingFlagged",
      "Mastered",
      "NeedsInstruction"
    ],
    "initial_handling": {
      "on_first_encounter": {
        "uncertain": "no_record_retry_in_session",
        "clear_correct": {
          "create": true,
          "state": "Seen"
        },
        "clear_error": {
          "create": true,
          "state": "UnderReview"
        }
      }
    },
    "attempt_scoring": {
      "count_attempt_if": {
        "asr_conf_min": 0.85,
        "snr_min_db": 15,
        "timing_percentile_bounds": [
          5,
          95
        ],
        "phoneme_quality": {
          "avg_min": 0.6,
          "low_threshold": 0.4,
          "allow_low_count_max": 1
        }
      },
      "lexical_match_uses_allowed_variants": true,
      "uncertain_handling": "DoNotChangeState_RetryInSession"
    },
    "mastery_rules": {
      "seen_or_unflagged_to_mastered": {
        "last_k": 8,
        "min_correct": 6,
        "min_distinct_days": 3,
        "min_distinct_sentences": 2,
        "last_attempt_must_be": "GREEN"
      },
      "flagged_to_mastered": {
        "last_k": 4,
        "min_correct": 3,
        "min_distinct_days": 2,
        "min_distinct_sentences": 2,
        "last_attempt_must_be": "GREEN"
      },
      "demotion_from_mastered": {
        "window_days": 30,
        "min_errors": 2,
        "only_when_high_confidence": true
      }
    },
    "maintenance": {
      "check_intervals_days": [
        14,
        30,
        60
      ],
      "on_green": "extend_interval",
      "on_clear_error": "enter_UnderReview"
    },
    "transitions": {
      "on_first_error_any_state": "UnderReview",
      "under_review": {
        "in_session_micro_retest_after_n_sentences": {
          "min": 3,
          "max": 5
        },
        "if_second_clear_error": {
          "from_seen": "PracticingUnflagged",
          "from_mastered": "PracticingFlagged"
        },
        "if_clear_correct": {
          "from_seen": "Seen",
          "from_mastered": "Mastered"
        },
        "or_next_session_priority": true
      }
    },
    "needs_instruction": {
      "enter_after": {
        "min_clear_errors": 3,
        "min_distinct_days": 2
      },
      "exit_condition": "micro_lesson_completed_and_two_green_checks"
    },
    "micro_lesson": {
      "duration_seconds": {
        "min": 20,
        "max": 40
      },
      "steps": [
        "Model slow read of the full sentence",
        "Child echo read",
        "Chunk up to the target word within the sentence",
        "Normal-speed read",
        "Two quick sentence checks"
      ]
    },
    "spacing_policy": {
      "review_half_life_days": {
        "start_unflagged": 2,
        "start_flagged": 1,
        "on_success_multiply": 1.4,
        "on_failure_multiply": 0.5,
        "min": 1,
        "max": 60
      },
      "fixed_checkpoints": {
        "flagged": [
          "0s",
          "1d",
          "3d",
          "7d",
          "14d"
        ],
        "unflagged": [
          "0s",
          "2d",
          "5d",
          "12d",
          "24d"
        ]
      }
    },
    "insertion_rules": {
      "practice_density_pct": {
        "min": 15,
        "max": 25
      },
      "max_practice_words_per_sentence": 3,
      "min_chars_between_practice_words": 8,
      "priority_lists": [
        "PracticingFlagged",
        "PracticingUnflagged",
        "UnderReview"
      ],
      "required_sentence_variety_per_week": 2,
      "highlight_style": "karaoke",
      "avoid_clusters_over_n": 3
    },
    "session_flow": {
      "on_session_start": [
        "Queue items with next_due_at <= now",
        "Guarantee planned practicing words appear in a new sentence form when available",
        "Limit daily practicing items to 20-30 for younger grades; overflow to tomorrow"
      ],
      "on_attempt": [
        "If low SNR or low ASR confidence: mark Uncertain and schedule in-session retry",
        "If GREEN: update rolling stats, extend half-life, check mastery_rules",
        "If clear error: transition via UnderReview and shrink half-life"
      ],
      "on_session_end": [
        "Persist next_due_at and state changes",
        "Log reasons for promotions/demotions for explainability"
      ]
    },
    "data_fields_per_user_word": [
      "state",
      "last_seen_at",
      "next_due_at",
      "correct_in_last_k",
      "days_covered",
      "distinct_sentence_count",
      "streak_correct",
      "streak_wrong",
      "stability_score",
      "asr_conf_last",
      "snr_last",
      "last_transition_reason",
      "language"
    ],
    "grade_transition_hooks": {
      "carry_over_practice": true,
      "bridge_session_practice_density_pct": {
        "min": 10,
        "max": 15
      },
      "respect_onramp_word_range_override": true
    },
    "language_support": {
      "selection": "grade_then_language",
      "profiles": {
        "en": {
          "asr_locale_hint": "en-IN",
          "script": "Latin",
          "allowed_variant_packs": [
            "indian_english_pron_variants"
          ],
          "phoneme_scoring_overrides": {
            "avg_min": 0.6,
            "low_threshold": 0.4,
            "allow_low_count_max": 1
          }
        },
        "hi": {
          "asr_locale_hint": "hi-IN",
          "script": "Devanagari",
          "allowed_variant_packs": [
            "standard_hindi_variants"
          ],
          "phoneme_scoring_overrides": {
            "avg_min": 0.6,
            "low_threshold": 0.4,
            "allow_low_count_max": 1
          }
        }
      },
      "mismatch_policy": "skip_word_if_language_differs"
    },
    "content_hooks": {
      "before_generate_passage": [
        "target_language = user.selected_language or languages.default",
        "Filter practice queue: word.language == target_language",
        "Select sentence templates and tokenization for target_language"
      ],
      "select_practice_words": [
        "Prioritize states: PracticingFlagged > PracticingUnflagged > UnderReview (within target_language)",
        "Ensure sentence variety (template differs from last time) and vary word position"
      ],
      "place_practice_words": [
        "Respect insertion_rules (density 15–25%, ≤3 per sentence, ≥8 chars apart)",
        "Enforce script compatibility with target_language (Latin vs Devanagari)",
        "Apply highlight_style: karaoke"
      ]
    }
  },
  "languages": {
    "default": "en",
    "ui_selection_order": [
      "grade",
      "language"
    ],
    "available": [
      {
        "code": "en",
        "name": "English",
        "script": "Latin",
        "direction": "ltr"
      },
      {
        "code": "hi",
        "name": "Hindi",
        "script": "Devanagari",
        "direction": "ltr"
      }
    ]
  }
};
