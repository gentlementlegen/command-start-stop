import { factory, nullable, primaryKey } from "@mswjs/data";

/**
 * Creates an object that can be used as a db to persist data within tests
 */
export const db = factory({
  users: {
    id: primaryKey(Number),
    login: String,
    role: String,
  },
  issue: {
    id: primaryKey(Number),
    assignees: Array,
    html_url: String,
    repository_url: String,
    state: String,
    owner: String,
    repo: String,
    labels: Array,
    author_association: String,
    body: nullable(String),
    closed_at: nullable(Date),
    created_at: nullable(Date),
    comments: Number,
    comments_url: String,
    events_url: String,
    labels_url: String,
    locked: Boolean,
    node_id: String,
    title: String,
    number: Number,
    updated_at: Date,
    url: String,
    user: nullable(Object),
    milestone: nullable(Object),
    assignee: nullable({
      avatar_url: String,
      email: nullable(String),
      events_url: String,
      followers_url: String,
      following_url: String,
      gists_url: String,
      gravatar_id: nullable(String),
      html_url: String,
      id: Number,
      login: String,
      name: nullable(String),
      node_id: String,
      organizations_url: String,
      received_events_url: String,
      repos_url: String,
      site_admin: Boolean,
      starred_at: String,
      starred_url: String,
      subscriptions_url: String,
      type: String,
      url: String,
      role: String
    }),
  },
  repo: {
    id: primaryKey(Number),
    html_url: String,
    name: String,
    owner: {
      login: String,
      id: Number,
    },
    issues: Array,
  },
  pull: {
    id: primaryKey(Number),
    html_url: String,
    number: Number,
    state: String,
    title: String,
    user: Object,
    body: nullable(String),
    repo: String,
    owner: String,
    author: nullable({
      avatar_url: String,
      email: nullable(String),
      events_url: String,
      followers_url: String,
      following_url: String,
      gists_url: String,
      gravatar_id: nullable(String),
      html_url: String,
      id: Number,
      login: String,
      name: nullable(String),
      node_id: String,
      organizations_url: String,
      received_events_url: String,
      repos_url: String,
      site_admin: Boolean,
      starred_at: String,
      starred_url: String,
      subscriptions_url: String,
      type: String,
      url: String,
    }),
    pull_request: Object,
    assignees: Array,
    requested_reviewers: Array,
    requested_teams: Array,
    labels: Array,
    draft: Boolean,
    created_at: Date,
    updated_at: Date,
    closed_at: nullable(Date),
    merged_at: nullable(Date),
    merge_commit_sha: nullable(String),
    assignee: nullable(Object),
    milestone: nullable(Object),
    head: Object,
    base: Object,
    _links: Object,
    author_association: String,
  },
  review: {
    id: primaryKey(Number),
    user: Object,
    owner: String,
    repo: String,
    body: String,
    state: String,
    pull_number: Number,
    html_url: String,
    pull_request_url: String,
    submitted_at: Date,
    commit_id: nullable(String),
  },
  event: {
    id: primaryKey(Number),
    actor: Object,
    owner: String,
    repo: String,
    issue_number: Number,
    event: String,
    commit_id: nullable(String),
    commit_url: String,
    created_at: Date,
    source: nullable({
      issue: {
        number: Number,
        html_url: String,
        state: String,
        body: nullable(String),
        repository: {
          full_name: String,
        },
        user: {
          login: String,
        },
        pull_request: {
          url: String,
          html_url: String,
          diff_url: String,
          patch_url: String,
          merged_at: Date,
        },
      },
    }),
  },
});
