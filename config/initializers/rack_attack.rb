Rack::Attack.safelist_ip(["127.0.0.1", "35.185.199.199", "34.83.23.240", "2600:1f1c:471:9d00::c8", "2600:1f1c:471:9d01::c8"])

Rack::Attack.throttle("Requests by IP", limit: 50, period: 60.seconds) do |req|
  req.ip
end
