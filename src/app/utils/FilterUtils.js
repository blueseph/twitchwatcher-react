export const filterStreams = (streams, { term }) =>
  streams.filter(stream =>
    (stream.channel.display_name && stream.channel.display_name.toLowerCase()
                                      .includes(term.toLowerCase())) ||
    (stream.channel.status && stream.channel.status.toLowerCase().includes(term.toLowerCase())) ||
    (stream.game && stream.game.toLowerCase().includes(term.toLowerCase()))
);
