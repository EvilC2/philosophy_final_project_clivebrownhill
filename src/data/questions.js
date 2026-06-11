// 22 questions. Each option's `tags` are philosophy ids that get +1, and its
// optional `lead` (the option's dominant philosophy) gets +1 more, so a strong
// pick is worth +2 for the lead and +1 for its two bundle-mates.
//
// BALANCE GUARANTEE: every scoring question splits all 15 philosophies into
// 5 options of exactly 3 tags each, so each philosophy appears once per
// question and an equal number of times across the whole quiz. On top of that,
// each philosophy is the `lead` an equal number of times (7 each, with 5
// options left flat). So the TOTAL points available per philosophy are equal
// (29 each). No answer is "heavier" than another, and no philosophy is
// favoured by the math. The lead weight only sharpens results; it does not
// tilt the base rates.
//
// Each question also has a final "none of these fit / not sure" option with
// NO tags and no lead. It scores nothing, so it is a safe escape hatch that
// does not touch the balance.
const SKIP = { text: 'Honestly, none of these fit me, or I’m not sure.', tags: [] }

export const questions = [
  {
    q: 'A perfect evening you’d look back on for years. What does it look like?',
    options: [
      { text: 'People you love around one table. Real conversation, phones away, the kind of night you still remember years later.', tags: ['hooks', 'christian', 'confucian'], lead: 'hooks' },
      { text: 'Quiet and simple. Low light, no noise, nowhere to be, completely at ease.', tags: ['stoic', 'buddhist', 'ascetic'], lead: 'buddhist' },
      { text: 'Something new you didn’t plan. Spontaneous, free, wide awake to being alive.', tags: ['cynic', 'existentialist', 'nihilist'], lead: 'nihilist' },
      { text: 'Full-on enjoyment. Incredible food, great company, every sense switched on.', tags: ['hedonism', 'epicurean', 'materialism'], lead: 'hedonism' },
      { text: 'Doing something that actually counts. Making or building something real with your time.', tags: ['maslow', 'nussbaum', 'watsuji'], lead: 'watsuji' },
      SKIP
    ]
  },
  {
    q: 'You’re wiped after a long, draining day. What actually brings you back?',
    options: [
      { text: 'Movement. A walk, the gym, cooking dinner, anything that gets you back into your body.', tags: ['stoic', 'epicurean', 'hedonism'], lead: 'hedonism' },
      { text: 'Quiet. Screen off, lights low, let everything settle.', tags: ['buddhist', 'ascetic', 'nihilist'], lead: 'buddhist' },
      { text: 'Your people. You recharge by being around them, not away from them.', tags: ['hooks', 'christian', 'watsuji'], lead: 'watsuji' },
      { text: 'Progress on your own project. Getting something done is what really restores you.', tags: ['maslow', 'existentialist', 'cynic'], lead: 'maslow' },
      { text: 'Handling the small practical things that quietly keep your life running.', tags: ['materialism', 'confucian', 'nussbaum'], lead: 'materialism' },
      SKIP
    ]
  },
  {
    q: 'A friend asks what you honestly think about a decision you’re sure is a mistake.',
    options: [
      { text: 'Tell them straight. Real friendship means the truth, not just being nice.', tags: ['hooks', 'christian', 'stoic'], lead: 'stoic' },
      { text: 'Ask questions and let them arrive at it on their own.', tags: ['buddhist', 'confucian', 'nussbaum'], lead: 'confucian' },
      { text: 'Say it once, then respect that it’s their life and their call.', tags: ['existentialist', 'cynic', 'nihilist'], lead: 'existentialist' },
      { text: 'Drop the ego and focus only on what genuinely helps them.', tags: ['ascetic', 'watsuji', 'maslow'], lead: 'ascetic' },
      { text: 'Keep it warm and easy. You’ll have their back whatever they pick.', tags: ['epicurean', 'hedonism', 'materialism'], lead: 'epicurean' },
      SKIP
    ]
  },
  {
    q: 'If you’re being completely honest, what do you most want from life?',
    options: [
      { text: 'To become the fullest version of myself. Growing into who I could be, on my own terms.', tags: ['cynic', 'existentialist', 'maslow'], lead: 'maslow' },
      { text: 'Love and belonging. To be truly known and feel at home with people.', tags: ['hooks', 'christian', 'watsuji'], lead: 'hooks' },
      { text: 'To live by my values and give myself to something bigger than me.', tags: ['nussbaum', 'confucian', 'stoic'], lead: 'nussbaum' },
      { text: 'Peace. To let go, accept what I can’t control, and be okay anyway.', tags: ['buddhist', 'ascetic', 'nihilist'], lead: 'buddhist' },
      { text: 'To actually enjoy it. Beauty, pleasure, comfort, a life I can taste.', tags: ['hedonism', 'epicurean', 'materialism'], lead: 'hedonism' },
      SKIP
    ]
  },
  {
    q: 'What’s your honest relationship with money and nice things?',
    options: [
      { text: 'I want them and won’t apologise. Comfort and beauty are part of a good life.', tags: ['materialism', 'hedonism', 'maslow'], lead: 'materialism' },
      { text: 'They’re tools. Useful for living well, empty once they become the whole point.', tags: ['stoic', 'confucian', 'nussbaum'], lead: 'stoic' },
      { text: 'Honestly, they’ve never been the thing that moves me.', tags: ['cynic', 'ascetic', 'buddhist'], lead: 'ascetic' },
      { text: 'They matter, but less than time, freedom, and the people I love.', tags: ['epicurean', 'hooks', 'existentialist'], lead: 'epicurean' },
      { text: 'I’ve noticed the wanting never stops, so I put my energy elsewhere.', tags: ['nihilist', 'christian', 'watsuji'], lead: 'nihilist' },
      SKIP
    ]
  },
  {
    q: 'Someone wrongs you badly. What actually happens inside you?',
    options: [
      { text: 'Anger first. Then I think my way back to steady.', tags: ['stoic', 'existentialist', 'maslow'], lead: 'stoic' },
      { text: 'I need to understand why they did it before I react.', tags: ['buddhist', 'confucian', 'nussbaum'], lead: 'nussbaum' },
      { text: 'I let it slide off. I’m not handing them that kind of power.', tags: ['cynic', 'ascetic', 'nihilist'], lead: 'cynic' },
      { text: 'I talk it through with someone I trust.', tags: ['hooks', 'christian', 'watsuji'], lead: 'hooks' },
      { text: 'I let myself feel it fully, then refuse to let it cost me anything more.', tags: ['epicurean', 'hedonism', 'materialism'], lead: 'epicurean' },
      SKIP
    ]
  },
  {
    q: 'Picture a life truly well lived. What’s the image in your head?',
    options: [
      { text: 'Someone old and unhurried, surrounded by people who really knew them.', tags: ['hooks', 'confucian', 'christian'], lead: 'hooks' },
      { text: 'Someone who burned bright on their own terms and never sold out.', tags: ['cynic', 'existentialist', 'hedonism'], lead: 'existentialist' },
      { text: 'Someone who went through real pain, made sense of it, and came out calm and wise.', tags: ['buddhist', 'stoic', 'ascetic'], lead: 'buddhist' },
      { text: 'Someone who kept growing into their potential and built something that outlived them.', tags: ['materialism', 'maslow', 'watsuji'], lead: 'watsuji' },
      { text: 'Someone who saw life clearly, lived it honestly, and left things a little better.', tags: ['nussbaum', 'nihilist', 'epicurean'], lead: 'nussbaum' },
      SKIP
    ]
  },
  {
    q: 'How do you really feel about social rules, traditions, and expectations?',
    options: [
      { text: 'Mostly cages. Every one of them is worth questioning.', tags: ['cynic', 'nihilist', 'existentialist'], lead: 'cynic' },
      { text: 'Some carry real wisdom, but most people just follow them without thinking.', tags: ['stoic', 'buddhist', 'ascetic'], lead: 'stoic' },
      { text: 'They’re the scaffolding that makes real relationships possible.', tags: ['confucian', 'watsuji', 'christian'], lead: 'confucian' },
      { text: 'I keep the ones I’ve actually chosen and quietly drop the rest.', tags: ['maslow', 'hooks', 'epicurean'], lead: 'maslow' },
      { text: 'I judge any rule by one test: does it help people live well?', tags: ['nussbaum', 'materialism', 'hedonism'], lead: 'nussbaum' },
      SKIP
    ]
  },
  {
    q: 'Being completely honest, what does love actually mean to you?',
    options: [
      { text: 'Choosing the same person again every day, even when it’s hard.', tags: ['hooks', 'christian', 'confucian'], lead: 'hooks' },
      { text: 'Letting someone be completely free, even free to leave.', tags: ['existentialist', 'cynic', 'buddhist'], lead: 'existentialist' },
      { text: 'Seeing someone with no illusions and choosing them anyway.', tags: ['stoic', 'ascetic', 'nihilist'], lead: 'stoic' },
      { text: 'Two people helping each other grow into more.', tags: ['maslow', 'nussbaum', 'watsuji'], lead: 'maslow' },
      { text: 'Warmth, delight, and comfort. Feeling fully at home with someone.', tags: ['hedonism', 'epicurean', 'materialism'], lead: 'hedonism' },
      SKIP
    ]
  },
  {
    q: 'Which of these questions unsettles you most when you really sit with it?',
    options: [
      { text: 'Am I living by my own values, or just following someone else’s script?', tags: ['existentialist', 'cynic', 'stoic'], lead: 'existentialist' },
      { text: 'Am I actually here for my life, or just passing the time?', tags: ['buddhist', 'epicurean', 'ascetic'], lead: 'buddhist' },
      { text: 'Am I really loving my people, or just going through the motions?', tags: ['hooks', 'christian', 'confucian'], lead: 'hooks' },
      { text: 'Am I becoming who I could be, or slowly shrinking?', tags: ['maslow', 'nussbaum', 'watsuji'], lead: 'maslow' },
      { text: 'Does any of this mean anything, or am I just comfortable?', tags: ['nihilist', 'hedonism', 'materialism'], lead: 'nihilist' },
      SKIP
    ]
  },
  {
    q: 'A wide-open Saturday, nothing you have to do. What actually happens?',
    options: [
      { text: 'I plan it out. Errands, a bit of structure, a head start on the week.', tags: ['confucian', 'materialism', 'nussbaum'], lead: 'confucian' },
      { text: 'I start with my body and let the day take shape from there.', tags: ['epicurean', 'stoic', 'hedonism'], lead: 'epicurean' },
      { text: 'I give the whole day to one person, properly.', tags: ['hooks', 'watsuji', 'christian'], lead: 'watsuji' },
      { text: 'I finally make something I never have time for during the week.', tags: ['maslow', 'existentialist', 'cynic'], lead: 'cynic' },
      { text: 'I do almost nothing. Rest, quiet, no plan, and no guilt about it.', tags: ['buddhist', 'ascetic', 'nihilist'], lead: 'buddhist' },
      SKIP
    ]
  },
  {
    q: 'You’re going through something genuinely painful. What’s your instinct?',
    options: [
      { text: 'Do something about it. Take practical steps and change what I can.', tags: ['nussbaum', 'christian', 'materialism'], lead: 'nussbaum' },
      { text: 'Sit with it instead of rushing to fix it.', tags: ['buddhist', 'stoic', 'ascetic'], lead: 'buddhist' },
      { text: 'Work out what’s really causing it before I do anything.', tags: ['confucian', 'watsuji', 'nihilist'], lead: 'confucian' },
      { text: 'Go to the people who get me and ask for what I need.', tags: ['hooks', 'existentialist', 'maslow'], lead: 'maslow' },
      { text: 'Accept that pain is part of life, and keep living fully anyway.', tags: ['cynic', 'epicurean', 'hedonism'], lead: 'hedonism' },
      SKIP
    ]
  },
  {
    q: 'Whose actual life would you most want to look at up close? Not their ideas, their life.',
    options: [
      { text: 'Marcus Aurelius, who ran an empire under crushing pressure and kept his soul intact.', tags: ['stoic', 'confucian', 'christian'], lead: 'stoic' },
      { text: 'Diogenes, who owned nothing, owed nothing, and feared no one.', tags: ['cynic', 'ascetic', 'nihilist'], lead: 'cynic' },
      { text: 'bell hooks, who made love and community her serious life’s work.', tags: ['hooks', 'watsuji', 'nussbaum'], lead: 'watsuji' },
      { text: 'Siddhartha Gautama, who left a palace to understand his own mind and found peace.', tags: ['buddhist', 'epicurean', 'existentialist'], lead: 'epicurean' },
      { text: 'Aristippus, equally at ease with kings or in poverty, a master of enjoying whatever came.', tags: ['hedonism', 'materialism', 'maslow'], lead: 'hedonism' },
      SKIP
    ]
  },
  {
    q: 'If you’re honest, what’s the most important thing in your life right now?',
    options: [
      { text: 'The people who love me.', tags: ['hooks', 'christian', 'confucian'], lead: 'christian' },
      { text: 'My freedom. To think, to choose, to become.', tags: ['existentialist', 'cynic', 'maslow'], lead: 'existentialist' },
      { text: 'My integrity. The values I actually live by.', tags: ['stoic', 'ascetic', 'nussbaum'], lead: 'stoic' },
      { text: 'My peace. Being okay no matter what comes.', tags: ['buddhist', 'epicurean', 'nihilist'], lead: 'epicurean' },
      { text: 'What I’m building. Security and a life I can count on.', tags: ['materialism', 'watsuji', 'hedonism'], lead: 'materialism' },
      SKIP
    ]
  },
  {
    q: 'What’s your gut feeling about your community: family, friends, your city, the world?',
    options: [
      { text: 'Responsibility. I didn’t choose them, but I owe them something.', tags: ['confucian', 'watsuji', 'christian'], lead: 'confucian' },
      { text: 'Connection. These relationships are what my life is actually made of.', tags: ['hooks', 'epicurean', 'maslow'], lead: 'hooks' },
      { text: 'Tension. I want belonging and freedom at the same time.', tags: ['existentialist', 'cynic', 'nihilist'], lead: 'existentialist' },
      { text: 'Curiosity. I want to understand how the whole thing really works.', tags: ['nussbaum', 'buddhist', 'ascetic'], lead: 'nussbaum' },
      { text: 'Gratitude. For the simple warmth of being among other people.', tags: ['stoic', 'hedonism', 'materialism'], lead: 'materialism' },
      SKIP
    ]
  },
  {
    q: 'What do you make of the idea that life has no built-in meaning?',
    options: [
      { text: 'It’s freeing. Now I get to decide for myself, and enjoy it.', tags: ['existentialist', 'cynic', 'hedonism'], lead: 'cynic' },
      { text: 'I sit with how frightening that is, honestly.', tags: ['nihilist', 'buddhist', 'ascetic'], lead: 'nihilist' },
      { text: 'Beside the point. Meaning is something you make by how you live.', tags: ['stoic', 'maslow', 'epicurean'], lead: 'maslow' },
      { text: 'Meaning comes through love and connection, and that’s plenty.', tags: ['hooks', 'christian', 'confucian'], lead: 'christian' },
      { text: 'Doesn’t change a thing about how I want to live: fully, fairly, right now.', tags: ['nussbaum', 'watsuji', 'materialism'], lead: 'nussbaum' },
      SKIP
    ]
  },
  {
    q: 'What’s your relationship with pleasure: food, beauty, comfort, enjoyment?',
    options: [
      { text: 'I chase it without guilt. It’s part of a good life.', tags: ['hedonism', 'materialism', 'maslow'], lead: 'hedonism' },
      { text: 'The simple pleasures have turned out to be the ones that last.', tags: ['epicurean', 'stoic', 'confucian'], lead: 'epicurean' },
      { text: 'I’m a little wary of how much I let my life revolve around it.', tags: ['buddhist', 'ascetic', 'nihilist'], lead: 'ascetic' },
      { text: 'It’s one good thing among many. I just don’t build my life on it.', tags: ['existentialist', 'cynic', 'nussbaum'], lead: 'existentialist' },
      { text: 'The best pleasures are the ones shared with people I love.', tags: ['hooks', 'christian', 'watsuji'], lead: 'christian' },
      SKIP
    ]
  },
  {
    q: 'What do you think is the biggest obstacle to a good life?',
    options: [
      { text: 'Other people’s expectations, and how hard they are to ignore.', tags: ['existentialist', 'cynic', 'nihilist'], lead: 'nihilist' },
      { text: 'Your own habits and fears, the ones you never stop to look at.', tags: ['buddhist', 'ascetic', 'stoic'], lead: 'ascetic' },
      { text: 'Real injustice. Poverty, and people never getting a fair shot.', tags: ['nussbaum', 'christian', 'watsuji'], lead: 'christian' },
      { text: 'Failing to love the people around you well.', tags: ['hooks', 'confucian', 'epicurean'], lead: 'confucian' },
      { text: 'Holding yourself back. Too much restraint and not enough actual living.', tags: ['hedonism', 'materialism', 'maslow'], lead: 'materialism' },
      SKIP
    ]
  },
  {
    q: 'When you’re gone, how would you most want people to talk about you?',
    options: [
      { text: 'That they were genuinely free.', tags: ['cynic', 'existentialist', 'nihilist'], lead: 'cynic' },
      { text: 'That they loved people well.', tags: ['hooks', 'christian', 'confucian'], lead: 'christian' },
      { text: 'That they were at peace, and wise about how to live.', tags: ['buddhist', 'stoic', 'ascetic'], lead: 'ascetic' },
      { text: 'That they became who they were meant to be, and lifted others along the way.', tags: ['maslow', 'nussbaum', 'watsuji'], lead: 'watsuji' },
      { text: 'That they really knew how to live, and left behind a life people admired.', tags: ['hedonism', 'epicurean', 'materialism'], lead: 'materialism' },
      SKIP
    ]
  },
  {
    q: 'What do you actually think philosophy is for?',
    options: [
      { text: 'Clearing away illusions so you can see what’s real.', tags: ['cynic', 'nihilist', 'buddhist'], lead: 'cynic' },
      { text: 'Helping you live better, not just think better.', tags: ['stoic', 'epicurean', 'maslow'] },
      { text: 'Understanding your place in something bigger than yourself.', tags: ['confucian', 'watsuji', 'christian'], lead: 'confucian' },
      { text: 'Sitting with the hard questions and living honestly anyway.', tags: ['existentialist', 'ascetic', 'nussbaum'], lead: 'ascetic' },
      { text: 'Getting the most out of the one life you actually have.', tags: ['hedonism', 'materialism', 'hooks'], lead: 'materialism' },
      SKIP
    ]
  },
  {
    q: 'It’s 2am and you can’t sleep. What’s the thought that keeps circling?',
    options: [
      { text: 'I keep replaying that thing I said to someone I care about.', tags: ['hooks', 'christian', 'confucian'], lead: 'christian' },
      { text: 'Most of what I’m spiralling about isn’t even in my control.', tags: ['stoic', 'buddhist', 'ascetic'], lead: 'ascetic' },
      { text: 'Am I wasting my one shot at this?', tags: ['existentialist', 'cynic', 'nihilist'], lead: 'nihilist' },
      { text: 'I just want tomorrow to feel as good as the best parts of today.', tags: ['hedonism', 'epicurean', 'materialism'] },
      { text: 'Am I actually getting closer to who I want to be?', tags: ['maslow', 'nussbaum', 'watsuji'], lead: 'watsuji' },
      SKIP
    ]
  },
  {
    q: 'A stranger does something kind that quietly changes your whole day. What sticks with you after?',
    options: [
      { text: 'How good it felt to be seen by someone who owed me nothing.', tags: ['hooks', 'watsuji', 'christian'], lead: 'christian' },
      { text: 'Proof that doing right is its own reason, no strings attached.', tags: ['stoic', 'confucian', 'nussbaum'] },
      { text: 'A reminder that the best moments are the ones nobody planned.', tags: ['cynic', 'existentialist', 'epicurean'] },
      { text: 'Honestly, just the small jolt of joy it gave me.', tags: ['hedonism', 'materialism', 'maslow'] },
      { text: 'That a moment doesn’t need to mean anything to still matter.', tags: ['nihilist', 'buddhist', 'ascetic'], lead: 'nihilist' },
      SKIP
    ]
  }
]
