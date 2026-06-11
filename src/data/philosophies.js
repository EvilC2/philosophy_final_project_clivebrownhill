// The 15 philosophies. Keys used as scoring tags throughout the quiz.
const rawPhilosophies = [
  {
    id: 'stoic',
    name: 'Stoicism',
    thinker: 'Marcus Aurelius',
    tagline: 'The good life is a disciplined one.',
    short:
      'Inner freedom through self-mastery. What you can’t control is irrelevant; what you can control is everything.',
    long: [
      'Stoicism holds that the good life comes not from what happens to you but from how you respond. Marcus Aurelius, a Roman emperor who spent his reign at war, wrote his Meditations as private notes — not to publish, but to hold himself to account.',
      'The Stoics believed that virtue is the only true good and that external events — wealth, reputation, even death — are ultimately indifferent. What matters is the quality of your reasoning and the consistency of your character.',
      'This is not emotional suppression; it is emotional mastery. The Stoic aim is apatheia: not the absence of feeling but freedom from being ruled by feeling.',
      'For the Stoic, peace is not found by getting what you want. It is found by wanting only what is within your reach.'
    ],
    traits: [
      'Hold themselves to high internal standards.',
      'Don’t need external validation.',
      'Have been through hard things and came out more measured, not more bitter.',
      'Think discipline is a form of freedom.'
    ]
  },
  {
    id: 'buddhist',
    name: 'Buddhist Ethics',
    thinker: 'Siddhartha Gautama',
    tagline: 'The good life is a present one.',
    short:
      'Suffering comes from clinging. The good life is found by releasing attachment and living fully in the present.',
    long: [
      'Siddhartha Gautama was born into total comfort and walked away from it. Having seen suffering for the first time — illness, age, death — he spent years trying to understand it.',
      'His conclusion was radical: most human suffering is self-generated. We suffer because we want things to be different than they are, because we cling to people and outcomes and identities that will inevitably change.',
      'The Buddhist path toward the good life is not passive — the Eightfold Path demands ethical living, effort, and deep attention. But the foundation is a kind of radical acceptance of impermanence that most people spend their lives avoiding.',
      'The goal is not happiness in the ordinary sense but something quieter: nirvana, a liberation from the cycle of craving and suffering.'
    ],
    traits: [
      'Have noticed that the wanting never stops.',
      'Are drawn to meditation or contemplative practice.',
      'Find more peace in letting go than in acquiring.',
      'Feel strongly about non-harming and compassion.'
    ]
  },
  {
    id: 'ascetic',
    name: 'Asceticism',
    thinker: 'Simone Weil',
    tagline: 'The good life is a stripped-down one.',
    short:
      'Strength through self-denial. By giving up what you don’t need, you free yourself to attend fully to what matters.',
    long: [
      'Asceticism is the deliberate practice of giving things up — comfort, possessions, indulgence — not because pleasure is evil, but because attachment to it crowds out something deeper. Across nearly every tradition, from desert monks to wandering Jain monks, the same instinct recurs: that we are freed by subtraction.',
      'Simone Weil lived it to the letter. A brilliant French philosopher, she refused comforts her own body needed, worked in factories and fields alongside the poor so she would not be insulated from their suffering, and treated attention itself — the capacity to truly see another person or thing — as the rarest and most generous act a human can perform.',
      'The ascetic claim is that wanting less is not deprivation but liberation. Every craving you release is one less thing the world can use to pull you around. What remains, once the noise is stripped away, is clarity, discipline, and a strange kind of abundance.',
      'It is the hardest of the philosophies to sell and, for those drawn to it, the most quietly powerful: the freedom of needing almost nothing.'
    ],
    traits: [
      'Feel lighter, not poorer, when they let things go.',
      'Are suspicious of comfort that dulls their attention.',
      'Find meaning in discipline and self-denial.',
      'Would rather want less than acquire more.'
    ]
  },
  {
    id: 'existentialist',
    name: 'Existentialist Ethics',
    thinker: 'Simone de Beauvoir',
    tagline: 'The good life is a chosen one.',
    short:
      'There is no pre-given meaning. You define your own life — and are responsible for protecting the freedom of others to do the same.',
    long: [
      'Simone de Beauvoir argued that the highest ethical imperative is this: determine your own life’s meaning while actively protecting the freedom of others to do the same.',
      'Existentialism begins with the claim that existence precedes essence — there is no human nature handed to you, no predetermined purpose. That sounds bleak but de Beauvoir found it liberating. You are radically free, and radically responsible.',
      'Her concept of the “spirit of seriousness” describes the trap most people fall into: identifying so completely with a role, a value system, or a social expectation that they forget they chose it, or never questioned whether they did. In The Second Sex, she applied this to women specifically — showing how an entire gender had been assigned a role and convinced it was natural.',
      'The existentialist challenge is not philosophical. It is lived. It demands you ask, every day: is this actually my choice?'
    ],
    traits: [
      'Have a strong sense of personal authenticity.',
      'Resist being put in boxes.',
      'Feel that conforming without questioning is a kind of moral failure.',
      'Take their own freedom seriously and feel uneasy when others surrender theirs.'
    ]
  },
  {
    id: 'hooks',
    name: 'Hooksian Love',
    thinker: 'bell hooks',
    tagline: 'The good life is a loving one.',
    short:
      'Love is not a feeling — it is a practice. A good life is built through genuine care, community, and honest relationship.',
    long: [
      'bell hooks argued that the dominant culture has profoundly confused love with romanticized fantasy, with possession, with need. Real love, she wrote, is a conscious practice: care, commitment, knowledge, responsibility, respect, and trust — all six, not just the easy ones.',
      'For hooks, the good life is not built alone, and it is not built through achievement. It is built in genuine relationship with others — and this requires truth-telling, including the kind of honesty that is uncomfortable and risks the relationship.',
      'She was particularly critical of a culture that treats self-help as individual work, severed from community. You cannot love well in isolation.',
      'The beloved community — a term she borrowed from Martin Luther King Jr. — is both the means and the destination.'
    ],
    traits: [
      'Their deepest relationships are their deepest source of meaning.',
      'Feel that being truly known by another person is among the most important things.',
      'Are suspicious of individualism.',
      'Believe honesty within relationships is an act of love, not cruelty.'
    ]
  },
  {
    id: 'epicurean',
    name: 'Epicureanism',
    thinker: 'Epicurus',
    tagline: 'The good life is a pleasurable — and simple — one.',
    short:
      'The greatest pleasures are the quiet ones. Friendship, peace of mind, a simple meal. Ataraxia: undisturbed tranquility.',
    long: [
      'Epicurus is almost always misread. He was not advocating indulgence. What he actually said was nearly the opposite: the greatest pleasures are the ones that cost nothing and leave no hangover — friendship, conversation, simple food, freedom from anxiety.',
      'He called the state he was aiming at ataraxia: undisturbed tranquility. He was deeply concerned with the fear of death (wasted energy, he argued — when you exist, death is absent; when death is present, you don’t exist to experience it) and with unnecessary desires, which he called the main source of human misery.',
      'The Epicurean good life is about editing, not accumulating. Removing the things that disturb your peace rather than chasing new highs.',
      'Quality, not quantity.'
    ],
    traits: [
      'Have found that simple pleasures outlast expensive ones.',
      'Prioritize peace of mind over status.',
      'Have noticed that their best evenings tend to cost nothing.',
      'Value friendship as a central good.'
    ]
  },
  {
    id: 'cynic',
    name: 'Cynicism',
    thinker: 'Diogenes',
    tagline: 'The good life is a free one.',
    short:
      'Most of what society calls valuable is a cage. True freedom comes from needing nothing from the system.',
    long: [
      'Diogenes lived in a large ceramic jar in the marketplace of Athens and reportedly told Alexander the Great — who asked what he could do for him — to get out of his sunlight.',
      'The Cynics believed that conventional society’s values — wealth, reputation, status, respectability — were not just unhelpful but actively corrupting. The path to the good life ran directly through rejecting them. Virtue alone mattered, and virtue required nothing external.',
      'The Cynic good life is one of radical self-sufficiency and radical honesty: nothing society offers has power over you, because you have chosen not to need it.',
      'Modern cynicism — the suspicion that everyone acts from self-interest — is almost the opposite of ancient Cynicism, which was a demanding positive practice of freedom.'
    ],
    traits: [
      'Distrust institutions instinctively.',
      'Feel most alive when they’ve shed obligations and expectations.',
      'Admire those who live outside the system without apology.',
      'For whom authenticity and freedom are non-negotiable.'
    ]
  },
  {
    id: 'christian',
    name: 'Christian Ethics',
    thinker: 'Jesus Christ',
    tagline: 'The good life is a loving, other-centred one.',
    short:
      'Love God and love your neighbour as yourself. Greatness through service. The last shall be first.',
    long: [
      'At the core of Jesus’s ethical teaching is a radical inversion of ordinary values. The good life is not about your own flourishing at others’ expense — it is defined entirely by love, for God and for your neighbour as yourself.',
      'The Sermon on the Mount describes the blessed not as the powerful or the comfortable but the meek, the merciful, the peacemakers, those who hunger for righteousness. Greatness comes through service. The first shall be last.',
      'This is not merely a religious claim — it is a complete reorientation of the moral calculus. Christian ethics insists that how you treat the most vulnerable person you encounter is the truest measure of your character.',
      'Whether or not someone holds theological Christian beliefs, this ethical vision has shaped the moral imagination of the West more than almost any other.'
    ],
    traits: [
      'Feel genuine obligation to others, not just those close to them.',
      'Service and giving feel like sources of meaning rather than sacrifice.',
      'Feel that love — real, costly, other-directed love — is the centre of a good life.',
      'Have a sense of moral duty that transcends self-interest.'
    ]
  },
  {
    id: 'confucian',
    name: 'Confucian Ethics',
    thinker: 'Confucius',
    tagline: 'The good life is a relational one.',
    short:
      'Virtue is realized through roles and relationships — benevolence, righteousness, propriety, wisdom, faithfulness — lived out in community.',
    long: [
      'Confucius believed that human beings are not fundamentally individuals who then choose to enter relationships. We are relational beings from the start — sons and daughters, friends, citizens — and our virtue is expressed through how we inhabit those roles.',
      'The Five Constant Virtues (benevolence, righteousness, propriety, wisdom, faithfulness) are not private qualities but relational ones: they describe how you treat your parents, your friends, those under your authority, and strangers.',
      'Confucius spent much of his life trying to persuade rulers and officials to govern with virtue rather than force. He mostly failed. He kept going anyway.',
      'The Confucian good life is not about self-expression — it is about living in right relationship, with integrity in your roles, in harmony with the people and the social order around you.'
    ],
    traits: [
      'Have strong loyalty to family and close relationships.',
      'Feel obligations to specific people, not just humanity in the abstract.',
      'Think that how you fulfil your roles — as a friend, a child, a member of a community — is where character actually shows.'
    ]
  },
  {
    id: 'maslow',
    name: 'Self-Actualization',
    thinker: 'Abraham Maslow',
    tagline: 'The good life is a fully realized one.',
    short:
      'At the top of the hierarchy of needs is self-actualization — becoming the fullest, most realized version of yourself.',
    long: [
      'Maslow’s hierarchy is usually reduced to a pyramid diagram. The insight underneath it is more interesting. Maslow argued that human beings have a fundamental drive toward self-actualization — not the most admired version of yourself, not the wealthiest, but the most genuinely and fully realized.',
      'This requires the lower rungs to be reasonably in place: safety, belonging, esteem. But these are foundations, not destinations. The destination is a life in which your unique capacities are actually expressed, in which growth is the constant, in which you are becoming rather than merely existing.',
      'Maslow’s self-actualizers shared certain traits: a clearer perception of reality, deep acceptance of themselves and others, autonomy, peak experiences, and a continued freshness of appreciation for life.',
      'The good life, for Maslow, is not arrived at. It is an ongoing becoming.'
    ],
    traits: [
      'Have a strong drive toward growth and self-improvement.',
      'Feel most alive when they’re developing a skill or expanding their understanding.',
      'Feel a kind of existential discomfort when they’re not moving forward.',
      'Want to become the fullest version of what they’re capable of.'
    ]
  },
  {
    id: 'nussbaum',
    name: 'Capability Approach',
    thinker: 'Martha Nussbaum',
    tagline: 'The good life is a capable one.',
    short:
      'What matters is not how much you have but what you are actually able to do and be. A good life requires real access to central human capabilities.',
    long: [
      'Martha Nussbaum starts not with resources or preferences but with a simple question: what are you actually able to do and be? Her Capability Approach argues that a good life requires real access to a set of central human capabilities — bodily health, emotional development, practical reason, meaningful relationships, political participation, play, and connection with other species and the natural world.',
      'This is both a personal and a political philosophy. A good life is only fully possible when the social and political conditions allow it. Poverty, injustice, and structural inequality are therefore not just unfortunate — they are direct violations of what human beings are owed.',
      'Nussbaum brings classical philosophy (especially Aristotle) into conversation with contemporary questions of gender, disability, and global justice.',
      'Her view of the good life has a structural dimension: individual virtue matters, but the conditions for it matter too.'
    ],
    traits: [
      'Think about justice, not just personal ethics.',
      'Feel that what people are able to do matters more than what they own.',
      'Are drawn to public service, policy, law, or social change.',
      'Think that a good life for them, in conditions of injustice, is incomplete.'
    ]
  },
  {
    id: 'watsuji',
    name: 'Tetsurian Rinri',
    thinker: 'Watsuji Tetsurō',
    tagline: 'The good life is a balanced one — self and community.',
    short:
      'Humans exist in betweenness — neither fully individual nor fully social. A good life navigates this tension wisely.',
    long: [
      'Watsuji Tetsurō argued against the Western tendency to treat the individual as the basic unit of ethics. Human beings, he insisted, always exist in “betweenness” — in the space between people, in relationships, in communities, embedded in a particular climate and place.',
      'His concept of Rinri (ethics, literally “the principle of between-ness”) is about navigating the tension between individual freedom and social responsibility with wisdom. A good life neither demands self-erasure for the sake of the group, nor justifies pure individualism that ignores relational obligation.',
      'The art is in the balance — claiming your freedom without abandoning your responsibilities, being rooted in community without losing yourself.',
      'Watsuji was also unusual in emphasizing climate and physical environment as part of human existence — who we are is shaped by where we are.'
    ],
    traits: [
      'Feel genuinely pulled between independence and belonging.',
      'Think that both radical individualism and pure collectivism miss something essential.',
      'Feel a strong sense of place — of being rooted somewhere.',
      'Think relationships are not optional extras but constitutive of who you are.'
    ]
  },
  {
    id: 'nihilist',
    name: 'Nihilism',
    thinker: 'Friedrich Nietzsche (as diagnostician)',
    tagline: 'The good life might be an illusion — and that’s worth taking seriously.',
    short:
      'Life has no inherent meaning, moral truths are human constructions, and the question of how to live in light of this is philosophy’s hardest problem.',
    long: [
      'Nihilism is not a comfortable result to receive, and it is not a comfortable philosophy to hold. But it is an honest one. Nihilism begins with a claim: there is no inherent meaning in the universe, no objective moral truths, no cosmic purpose to human life.',
      'Nietzsche did not invent this view — he diagnosed it as the inevitable consequence of the death of religious certainty in the modern world and spent most of his career trying to figure out what to do about it.',
      'The problem with nihilism is not that it is obviously wrong. The problem is what follows from it. Some nihilists respond with despair. Nietzsche responded by trying to construct new values from scratch — the will to power, the Übermensch — though his answers are as contested as his questions. Camus called the honest response to meaninglessness “the absurd” and argued that the right answer was rebellion: to live fully and without illusion in full awareness that life has no ultimate justification.',
      'Nihilism is less a destination than a starting point — the most honest possible acknowledgment of the problem that all other philosophies are trying to solve.'
    ],
    traits: [
      'Find comfort in intellectual honesty even when it’s bleak.',
      'Have lost faith in received meaning systems — religious, political, cultural — and are sitting with what remains.',
      'Appreciate Camus and feel that “the absurd” describes their experience.',
      'Distrust anyone who seems too certain about what a good life looks like.'
    ]
  },
  {
    id: 'materialism',
    name: 'Materialism',
    thinker: 'Ayn Rand',
    tagline: 'The good life is a prosperous one.',
    short:
      'A good life is something you build and can hold. Tangible success, security, comfort — the visible reward of your own effort.',
    long: [
      'Materialism, in its everyday ethical sense, holds that a good life is one you can actually point to: a home, savings, comfort, the things you earned. It is unfashionable to say out loud, but it is how an enormous number of people actually live — and there is a coherent philosophy underneath it.',
      'Ayn Rand gave the boldest defence of this instinct. For Rand, productive achievement is the noblest human activity, and the pursuit of your own rational self-interest is not a vice but a virtue. The person who builds, earns, and creates wealth is, on this view, the engine of everything good.',
      'The materialist good life takes the physical world seriously. Security is not nothing. Comfort is not shameful. The freedom that money buys — to choose, to travel, to never be trapped — is real freedom, not an illusion.',
      'Its critics say it confuses having with being. Its defenders answer that you cannot live a good life from inside poverty and precarity, and that there is dignity in wanting more and working to get it.'
    ],
    traits: [
      'Measure progress by what they’ve actually built or earned.',
      'Feel that security and comfort are real goods, not distractions.',
      'Are motivated by ambition and tangible results.',
      'Believe effort should produce something you can hold.'
    ]
  },
  {
    id: 'hedonism',
    name: 'Hedonism',
    thinker: 'Aristippus',
    tagline: 'The good life is a pleasurable one.',
    short:
      'Pleasure is the highest good and pain the only evil. Seize enjoyment now — the present moment is the only one you actually have.',
    long: [
      'Hedonism is the oldest and most direct answer to the question of the good life: pleasure is good, pain is bad, and a life well lived is one rich in enjoyment. Aristippus, a student of Socrates, founded the Cyrenaic school on exactly this claim.',
      'Unlike the Epicureans — who prized calm and simple pleasures — the Cyrenaics went further: the most vivid, immediate, bodily pleasures of the present moment are the most real. The future is uncertain and the past is gone; what you can actually enjoy is now.',
      'This is not laziness. The skilled hedonist is a connoisseur of experience — alive to food, music, sensation, sex, beauty, and joy in a way that more anxious people never allow themselves to be. Aristippus could enjoy luxury without being enslaved by it, and poverty without being crushed by it, because his attention was always on the pleasure available right now.',
      'The risk, of course, is the hangover — pleasures that cost more than they give. The hedonist’s discipline is knowing the difference, and choosing joy without regret.'
    ],
    traits: [
      'Believe enjoyment is a serious part of a life well lived, not a guilty extra.',
      'Are alive to sensation — food, music, beauty, the body.',
      'Live for the present more than the past or future.',
      'Refuse to apologize for wanting to feel good.'
    ]
  }
]

// Image map (files live in /public/philosophies). Attached to each philosophy below.
const imageMap = {
  stoic: '/philosophies/stoic.jpg',
  buddhist: '/philosophies/buddhist.jpg',
  ascetic: '/philosophies/ascetic.jpg',
  existentialist: '/philosophies/existentialist.jpg',
  hooks: '/philosophies/hooks.jpg',
  epicurean: '/philosophies/epicurean.png',
  cynic: '/philosophies/cynic.jpg',
  christian: '/philosophies/christian.png',
  confucian: '/philosophies/confucian.jpg',
  maslow: '/philosophies/maslow.jpeg',
  nussbaum: '/philosophies/nussbaum.jpg',
  watsuji: '/philosophies/watsuji.jpeg',
  nihilist: '/philosophies/nihilist.jpg',
  materialism: '/philosophies/materialism.jpg',
  hedonism: '/philosophies/hedonism.jpg'
}

export const philosophies = rawPhilosophies.map((p) => ({
  ...p,
  image: imageMap[p.id]
}))

// Order used as tiebreaker when scores are equal.
export const philosophyOrder = philosophies.map((p) => p.id)

export const philosophyById = Object.fromEntries(
  philosophies.map((p) => [p.id, p])
)
