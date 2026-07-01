import os
import pathlib

def load_env():
    """Simple loader for .env files without dependencies."""
    env_path = pathlib.Path(__file__).parent.parent / '.env'
    if env_path.exists():
        with open(env_path, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#') and '=' in line:
                    key, val = line.split('=', 1)
                    os.environ[key.strip()] = val.strip()

if __name__ == "__main__":
    load_env()
    api_key = os.getenv("API_KEY")
    if api_key:
        print(f"Success: Loaded API_KEY={api_key}")
    else:
        print("Warning: API_KEY environment variable not found.")
