export const filterStreams = (streams, { term }) =>
  streams.filter(stream =>
    (stream.channel.display_name.toLowerCase().includes(term.toLowerCase()) ||
    stream.channel.status.toLowerCase().includes(term.toLowerCase()) ||
    stream.game.toLowerCase().includes(term.toLowerCase())
  ));
