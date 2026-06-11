// Personality-test-style extras, tailored per philosophy.
// `primary`  = used when this philosophy is your #1 result.
// `secondary`= used when this philosophy is your #2 result.
export const profiles = {
  stoic: {
    primary: {
      strengths: [
        'Staying calm when everything around you isn’t',
        'Following through on what you decide to do',
        'Separating what’s yours to control from what isn’t'
      ],
      likes: [
        'People who do exactly what they said they would',
        'Calm under pressure — yours and theirs',
        'Self-control that looks effortless from the outside'
      ],
      lookout: 'Mistaking suppressing a feeling for mastering it.'
    },
    secondary: {
      note: 'Underneath your top result runs a Stoic spine — you steady yourself before you act.',
      also: ['You recover from setbacks faster than most', 'You’re the calm one in a crisis']
    }
  },
  buddhist: {
    primary: {
      strengths: [
        'Letting go of what you can’t hold onto',
        'Staying present instead of spinning ahead',
        'Noticing your own patterns of craving'
      ],
      likes: [
        'Slow mornings with absolutely no agenda',
        'People who let things go without a fight',
        'Calm that doesn’t need to announce itself'
      ],
      lookout: 'Using "detachment" to avoid things you should actually face.'
    },
    secondary: {
      note: 'A Buddhist current runs beneath your result — you sense when wanting is running you.',
      also: ['You can sit with discomfort others flee', 'You forgive yourself and others more easily']
    }
  },
  ascetic: {
    primary: {
      strengths: [
        'Needing remarkably little to be content',
        'Cutting out the noise to focus on what matters',
        'Self-discipline that others find almost impossible'
      ],
      likes: [
        'A near-empty room and a clear head',
        'People who aren’t owned by their stuff',
        'The quiet flex of needing almost nothing'
      ],
      lookout: 'Turning self-denial into a quiet kind of pride.'
    },
    secondary: {
      note: 'An ascetic streak runs under your result — you feel lighter every time you let something go.',
      also: ['You’re hard to tempt or distract', 'You find freedom in going without']
    }
  },
  existentialist: {
    primary: {
      strengths: [
        'Owning your choices instead of outsourcing them',
        'Spotting when you’re just performing a role',
        'Defining success on your own terms'
      ],
      likes: [
        'People who are unmistakably themselves',
        'The freedom to rewrite who you are',
        '2am conversations that actually go somewhere'
      ],
      lookout: 'Treating every commitment as if it were a cage.'
    },
    secondary: {
      note: 'An existentialist streak shapes your result — you keep asking "is this actually mine?"',
      also: ['You resist being boxed in', 'You take responsibility for your own path']
    }
  },
  hooks: {
    primary: {
      strengths: [
        'Building deep, honest relationships',
        'Telling hard truths with genuine care',
        'Showing up for your people, consistently'
      ],
      likes: [
        'People who let themselves be truly known',
        'Depth over small talk, every single time',
        'Love that shows up, not just love that feels nice'
      ],
      lookout: 'Pouring into others until your own cup is empty.'
    },
    secondary: {
      note: 'A loving, relational thread runs through your result — connection is where you find meaning.',
      also: ['People feel truly seen by you', 'You make honesty feel safe']
    }
  },
  epicurean: {
    primary: {
      strengths: [
        'Finding joy in simple, cheap pleasures',
        'Editing out what disturbs your peace',
        'Valuing friendship as a serious good'
      ],
      likes: [
        'A long dinner with people you actually like',
        'The best night that cost basically nothing',
        'Calm over the grind, always'
      ],
      lookout: 'Avoiding hard things in the name of tranquility.'
    },
    secondary: {
      note: 'An Epicurean undertone colours your result — you know the best nights often cost nothing.',
      also: ['You protect your peace deliberately', 'You savour the small stuff']
    }
  },
  cynic: {
    primary: {
      strengths: [
        'Living free of status games',
        'Saying the uncomfortable true thing',
        'Needing very little to be content'
      ],
      likes: [
        'People who genuinely don’t care what you think',
        'Total independence, zero strings',
        'Calling out the nonsense out loud'
      ],
      lookout: 'Rejecting things just because the crowd values them.'
    },
    secondary: {
      note: 'A Cynic edge runs under your result — you instinctively distrust the cage of expectation.',
      also: ['You’re hard to manipulate with status', 'You travel light, literally and otherwise']
    }
  },
  christian: {
    primary: {
      strengths: [
        'Putting others before yourself, genuinely',
        'Showing mercy when it’s hard',
        'Finding real meaning in service'
      ],
      likes: [
        'Showing up for the person nobody else does',
        'Forgiving instead of keeping score',
        'Quiet generosity that expects nothing back'
      ],
      lookout: 'Giving so much you forget you matter too.'
    },
    secondary: {
      note: 'A self-giving, other-centred current runs through your result.',
      also: ['You feel obligation beyond your inner circle', 'Service energises rather than drains you']
    }
  },
  confucian: {
    primary: {
      strengths: [
        'Showing up fully in every role you hold',
        'Bringing harmony to a group',
        'Honouring family and your commitments'
      ],
      likes: [
        'People who never let their people down',
        'Tradition done with real meaning behind it',
        'Loyalty that’s quiet but rock-solid'
      ],
      lookout: 'Following a role so closely you lose your own voice.'
    },
    secondary: {
      note: 'A Confucian thread runs through your result — you take your roles and obligations seriously.',
      also: ['People can count on you', 'You strengthen the groups you’re in']
    }
  },
  maslow: {
    primary: {
      strengths: [
        'Relentlessly growing and improving',
        'Turning raw potential into real skill',
        'Seeing reality clearly and accepting it'
      ],
      likes: [
        'People chasing the best version of themselves',
        'The thrill of getting visibly better at something',
        'Ambition that’s about growth, not ego'
      ],
      lookout: 'Never feeling "arrived" enough to rest.'
    },
    secondary: {
      note: 'A drive toward self-actualization runs beneath your result — you’re always becoming.',
      also: ['You feel restless when you’re not growing', 'You invest in your own development']
    }
  },
  nussbaum: {
    primary: {
      strengths: [
        'Caring about justice, not just personal ethics',
        'Seeing what people are actually able to do',
        'Connecting individual lives to bigger structures'
      ],
      likes: [
        'People who actually do something about injustice',
        'Fairness that gets built, not just felt',
        'Standing up for whoever’s being left out'
      ],
      lookout: 'Carrying the weight of the whole world’s wrongs.'
    },
    secondary: {
      note: 'A justice-minded, capability lens shapes your result — conditions matter, not just intentions.',
      also: ['You notice who’s being left out', 'You think structurally, not just personally']
    }
  },
  watsuji: {
    primary: {
      strengths: [
        'Balancing your freedom with your obligations',
        'Reading the space between people',
        'Staying rooted while staying yourself'
      ],
      likes: [
        'Belonging that doesn’t cost you yourself',
        'People who are deeply rooted in where they’re from',
        'Fitting in without disappearing'
      ],
      lookout: 'Getting stuck between independence and belonging.'
    },
    secondary: {
      note: 'A Watsuji-style balance runs through your result — you live in the "betweenness" of self and others.',
      also: ['You bridge individual and group needs', 'You feel grounded by where you’re from']
    }
  },
  nihilist: {
    primary: {
      strengths: [
        'Facing hard truths without flinching',
        'Thinking for yourself when certainty collapses',
        'Finding freedom in the absence of given meaning'
      ],
      likes: [
        'People who’ll say the bleak true thing out loud',
        'Honesty over comfortable illusions',
        'Side-eyeing anyone who seems too certain'
      ],
      lookout: 'Letting "nothing matters" become an excuse not to act.'
    },
    secondary: {
      note: 'A nihilist honesty runs under your result — you refuse comfortable illusions.',
      also: ['You see through easy answers', 'You can hold uncertainty without panicking']
    }
  },
  materialism: {
    primary: {
      strengths: [
        'Turning effort into tangible results',
        'Building security others can rely on',
        'Knowing the real value of what you’ve earned'
      ],
      likes: [
        'People who built it themselves, from nothing',
        'Quality you can actually feel',
        'The freedom that money quietly buys'
      ],
      lookout: 'Confusing what you have with who you are.'
    },
    secondary: {
      note: 'A grounded, material streak runs through your result — you respect what can actually be built.',
      also: ['You set concrete, reachable goals', 'You don’t romanticise being broke']
    }
  },
  hedonism: {
    primary: {
      strengths: [
        'Being fully alive to the present moment',
        'Savouring pleasure without guilt',
        'Knowing which joys are actually worth it'
      ],
      likes: [
        'People who say yes to the night',
        'Great food, great music, zero guilt',
        'Living now — "someday" is a trap'
      ],
      lookout: 'Chasing highs that cost more than they give.'
    },
    secondary: {
      note: 'A hedonist spark runs through your result — you take enjoyment seriously.',
      also: ['You bring fun and aliveness to a room', 'You don’t postpone joy indefinitely']
    }
  }
}
