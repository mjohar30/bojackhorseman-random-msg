const messages = [
  'It’s never too late to be the person you want to be. You need to choose the life you want.',
  'Carolyn, you are the star of a movie. This is the part of the movie where you get your heart broken. Where the world tests you, and people treat you like shit. But it has to happen this way. Otherwise, the end of the movie, when you get everything you want, won’t feel as rewarding. There are assholes out there, but in the end, they don’t matter. Because this movie’s not about them. It’s never been about them. All this time, the movie’s been about you.',
  'When you get sad, you run straight ahead and keep running forward, no matter what. There are people in your life that are gonna try to hold you back, slow you down, but you don’t let them. Don’t you stop running and don’t you ever look behind you. There’s nothing for you behind you. All that exists is what’s ahead.',
  'No one watches the show to feel feelings. Life is depressing enough already.',
  'I’m responsible for my own happiness? I can’t even be responsible for my own breakfast!',
  'I need to go take a shower so i can’t tell if I’m crying or not',
  'Sometimes life’s a bitch and then you keep living',
  'The universe is a cruel, uncaring void. The key to being happy isn’t the search for meaning; it’s just to keep yourself busy with unimportant nonsense, and eventually, you’ll be dead.',
  'You are a horrible person, and you not understanding that you’re a horrible person, doesn’t make you less of a horrible person.',
  'I don’t understand how people… live. It’s amazing to me that people wake up every morning and say: ‘Yeah, another day, let’s do it. How do people do it? I don’t know how.',
  'It gets easier. Every day it gets a little easier. But you gotta do it every day —that’s the hard part. But it does get easier',
  'I don’t know what to tell you. I’m happy for the first time in my life and I’m not gonna feel bad about it. It takes a long time to realise how truly miserable you are and even longer to see it doesn’t have to be that way. Only after you give up everything can you begin to find a way to be happy.',
  'Nothing on the outside, nothing on the inside.',
  'I want to feel good about myself. The way you do. And I don’t know how. I don’t know if I can.',
  'Kelsey, in this terrifying world, all we have are the connections that we make. I’m sorry I got you fired, I’m sorry I never called you after.',
  'Before I leaped, I should have seen the view form halfway down.',
  'Oh Bojack, no. There is no other side.',
  'Well, that’ the problem with life, right? Either you know what you want and then you don’t get what you want, or you get what you want, and then you don’t know what you want.',
  'Just pretend you are happy, and eventually you’ll forget you’re pretending.',
  'Even if no one appreciates you, it’s important that you don’t stop being good.',
  'Because my life is a mess right now and I compulsively take care of other people',
  'You are all the things that are wrong with you. It’s not the alcohol, or the drugs, or any of the shitty things that happened to you in your career, or when you were a kid. It’s you.',
  'Same thing that always happens. You didn’t know me. Then you fell in love with me, and now you know me.',
  'I need you to tell me that I’m a good person.',
  'One day, you’re gonna look around and you’re going to realize that everybody loves you, but nobody likes you. And that is the loneliest feeling in the world',
  'When you look at someone through rose-colored glasses, all the red flags just look like flags.'
];

const bojackSays = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { bojackSays };
